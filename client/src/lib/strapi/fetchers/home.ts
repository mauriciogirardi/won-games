import { BannerProps } from '@/components/banner/Banner'
import { baseUrl, strapiFetch } from '..'
import {
  AttributesCommon,
  HighlightCommon,
  HomeGraphQLResponse
} from '../types/home'
import { getHomeQuery } from '../queries/home'
import { GameCardProps } from '@/components/game-card/GameCard'
import { formatCurrency } from '@/utils/format-currency'
import { HighlightProps } from '@/components/highlight/Highlight'

function parsedGames(data: AttributesCommon[]) {
  return data.map(({ attributes }) => {
    const { cover, developers, name, price, slug } = attributes
    return {
      price: formatCurrency(price),
      slug,
      title: name,
      img: `${baseUrl}${cover.data.attributes.src}`,
      developer: developers.data[0].attributes.name
    } as GameCardProps
  })
}

function parsedHighlight(title: string, data: HighlightCommon | null) {
  return {
    title,
    highlight: {
      title: data?.title,
      backgroundImage: `${baseUrl}${data?.background.data.attributes.src}`,
      floatImage: `${baseUrl}${data?.floatImage.data.attributes.src}`,
      buttonLabel: data?.buttonLabel,
      buttonLink: data?.buttonLink,
      subtitle: data?.subtitle,
      alignment: data?.alignment
    } as HighlightProps
  }
}

function transformeDataBanners(home: HomeGraphQLResponse['data']) {
  const { banners, freeGames, newGames, sections, upcomingGames } = home
  const sectionsData = sections.data.attributes

  const parsedBanners = banners.data.map(({ attributes }) => {
    const { button, image, ribbon, subtitle, title } = attributes

    return {
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link,
      img: `${baseUrl}${image.data.attributes.url}`,
      ribbon: {
        name: ribbon?.text,
        color: ribbon?.color,
        size: ribbon?.size
      }
    } as BannerProps
  })

  const parsedFreeGames = parsedGames(freeGames.data)
  const parsedNewGames = parsedGames(newGames.data)
  const parsedUpcomingGames = parsedGames(upcomingGames.data)
  const parsedMostPopularGames = parsedGames(
    sectionsData.popularGames.games.data
  )

  const parsedFreeGamesHighlight = parsedHighlight(
    sectionsData.freeGames.title,
    sectionsData.freeGames.highlight
  )

  const parsedMostPopularHighlight = parsedHighlight(
    sectionsData.popularGames.title,
    sectionsData.popularGames.highlight
  )

  const parsedUpcomingHighlight = parsedHighlight(
    sectionsData.upcomingGames.title,
    sectionsData.upcomingGames.highlight
  )

  const parsedNewGamesHighlight = parsedHighlight(
    sectionsData.newGames.title,
    sectionsData.newGames.highlight
  )

  return {
    banners: parsedBanners,
    freeGames: parsedFreeGames,
    newGames: parsedNewGames,
    upcomingGames: parsedUpcomingGames,
    mostPopularGames: parsedMostPopularGames,
    freeGamesHighlight: parsedFreeGamesHighlight,
    mostPopularHighlight: parsedMostPopularHighlight,
    upcomingHighlight: parsedUpcomingHighlight,
    newGamesHighlight: parsedNewGamesHighlight
  }
}

export async function getDataHome() {
  const today = new Date().toISOString().slice(0, 10) // 0000-00-00
  const { body } = await strapiFetch<HomeGraphQLResponse>({
    query: getHomeQuery,
    variables: {
      date: today
    }
  })

  const response = body.data

  return transformeDataBanners(response)
}
