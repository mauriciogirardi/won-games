/*
 * game service
*/

import axios from "axios";
import { JSDOM } from "jsdom";
import slugify from "slugify";
import qs from "querystring";
import { factories } from "@strapi/strapi";
import { Product } from "../../types/Product";
import { API_CATEGORY, API_DEVELOPER, API_GAME, API_PLATFORM, API_PUBLISHER } from "../../utils/entries";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Exception(e) {
  return { e, data: e.data && e.data.errors && e.data.errors };
}

async function getGameInfo(slug) {
  try {
    const gogSlug = slug.replaceAll("-", "_").toLowerCase();

    const body = await axios.get(`https://www.gog.com/game/${gogSlug}`);
    const dom = new JSDOM(body.data);

    const raw_description = dom.window.document.querySelector(".description");

    const description = raw_description.innerHTML;
    const short_description = raw_description.textContent.slice(0, 160);

    const ratingElement = dom.window.document.querySelector(
      ".age-restrictions__icon use"
    );

    return {
      description,
      short_description,
      rating: ratingElement
        ? ratingElement
            .getAttribute("xlink:href")
            .replace(/_/g, "")
            .replace("#", "")
            .replace("pegi", "BR")
        : "BR0",
    };
  } catch (error) {
    console.log("getGameInfo:", Exception(error));
  }
}

async function getByName(name: string, entityService: string) {
  try {
    const item = await strapi.service(entityService).find({
      filters: { name },
    });

    return item.results.length > 0 ? item.results[0] : null;
  } catch (error) {
    console.log("getByName:", Exception(error));
  }
}

async function create(name: string, entityService: string) {
  try {
    const item = await getByName(name, entityService);

    if (!item) {
      await strapi.service(entityService).create({
        data: {
          name,
          slug: slugify(name, { strict: true, lower: true }),
        },
      });
    }
  } catch (error) {
    console.log("create:", Exception(error));
  }
}

async function createManyToManyData(products: Product[]) {
  const developersSet = new Set<string>();
  const publishersSet = new Set<string>();
  const categoriesSet = new Set<string>();
  const platformsSet = new Set<string>();

  products.forEach((product) => {
    const { developers, publishers, genres, operatingSystems } = product;

    genres?.forEach(({ name }) => {
      categoriesSet.add(name);
    });

    operatingSystems?.forEach((item) => {
      platformsSet.add(item);
    });

    developers?.forEach((item) => {
      developersSet.add(item);
    });

    publishers?.forEach((item) => {
      publishersSet.add(item);
    });
  });

  const createCall = (set: Set<string>, entityName: string) =>
    Array.from(set).map((name) => create(name, entityName));

  return Promise.all([
    ...createCall(developersSet, API_DEVELOPER),
    ...createCall(publishersSet, API_PUBLISHER),
    ...createCall(categoriesSet, API_CATEGORY),
    ...createCall(platformsSet, API_PLATFORM),
  ]);
}

async function setImage(
  {
    image,
    game,
    field = "cover"
  }: {
    image: string;
    game: { id: string; slug: string },
    field?: "cover" | "gallery"
  }) {
  const { data } = await axios.get(image, { responseType: "arraybuffer" });
  const buffer = Buffer.from(data, "base64");

  const FormData = require("form-data");

  const formData: any = new FormData();

  formData.append("refId", game.id);
  formData.append("ref", `${API_GAME}`);
  formData.append("field", field);
  formData.append("files", buffer, { filename: `${game.slug}.jpg` });

  console.info(`Uploading ${field} image: ${game.slug}.jpg`);

  try {
    await axios({
      method: "POST",
      url: `http://localhost:1337/api/upload/`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });
  } catch (error) {
    console.log("setImage:", Exception(error));
  }
}

async function createGames(products: Product[]) {
  await Promise.all(
    products.map(async (product) => {
      const item = await getByName(product.title, API_GAME);

      if (!item) {
        console.info(`Creating: ${product.title}...`);

        const game = await strapi.service(`${API_GAME}`).create({
          data: {
            name: product.title,
            slug: product.slug,
            price: product.price.finalMoney.amount,
            release_date: new Date(product.releaseDate),
            categories: await Promise.all(
              product.genres.map(({ name }) => getByName(name, API_CATEGORY))
            ),
            platforms: await Promise.all(
              product.operatingSystems.map((name) =>
                getByName(name, API_PLATFORM)
              )
            ),
            developers: await Promise.all(
              product.developers.map((name) =>
                getByName(name, API_DEVELOPER)
              )
            ),
            publisher: await Promise.all(
              product.publishers.map((name) =>
                getByName(name, API_PUBLISHER)
              )
            ),
            ...(await getGameInfo(product.slug)),
            publishedAt: new Date(),
          },
        });

        await setImage({ image: product.coverHorizontal, game });
        await Promise.all(
          product.screenshots.slice(0, 5).map((url) =>
            setImage({
              image: `${url.replace(
                "{formatter}",
                "product_card_v2_mobile_slider_639"
              )}`,
              game,
              field: "gallery",
            })
          )
        );

        return game;
      }
    })
  );
}

export default factories.createCoreService(API_GAME, () => ({
  async populate(params) {
    try {
      const gogApiUrl = `https://catalog.gog.com/v1/catalog?${qs.stringify(
        params
      )}`;

      const {
        data: { products },
      } = await axios.get<{products: Product[]}>(gogApiUrl);

      await createManyToManyData(products);
      await createGames(products);
    } catch (error) {
      console.log("populate:", Exception(error));
    }
  },
}));
