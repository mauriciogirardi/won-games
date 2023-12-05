import {
  AtributesGames,
  GamesGraphQLResponse,
  Pagination
} from '../types/games'
import { baseUrl, strapiFetch } from '..'
import { formatCurrency } from '@/utils/format-currency'
import { getGamesQuery } from '../queries/games'
import { TAGS } from '../constants'
import { AtributesGame, GameGraphQLResponse } from '../types/game'
import { getGameQuery } from '../queries/game'
import { Platform } from '@/components/game-details/GameDetails'

function transformeDataGames(games: AtributesGames[]) {
  return games.map(
    ({ attributes: { name, price, cover, developers, slug } }) => ({
      title: name,
      img: `${baseUrl}${cover.data.attributes.src}`,
      price: formatCurrency(price),
      developer: developers.data[0].attributes.name,
      slug
    })
  )
}

function transformeDataGame(game: AtributesGame) {
  const { attributes } = game
  const {
    name,
    slug,
    categories,
    cover,
    description,
    developers,
    gallery,
    platforms,
    price,
    publisher,
    rating,
    releaseDate,
    shortDescription
  } = attributes

  return {
    title: name,
    img: cover ? `${baseUrl}${cover.data.attributes.src}` : '',
    price: formatCurrency(price),
    developer: developers.data[0].attributes.name,
    slug,
    content: description,
    rating,
    shortDescription,
    releaseDate,
    gallery: gallery.data.map(({ attributes }) => ({
      src: `${baseUrl}${attributes.src}`,
      label: attributes.label
    })),
    publisher: publisher?.data.attributes.name || '',
    categories: categories.data.map(({ attributes }) => attributes.name),
    platforms: platforms.data.map(
      ({ attributes }) => attributes.name
    ) as Platform[]
  }
}

export async function getGames({ limit = 9 }: Pagination = {}) {
  const response = await strapiFetch<GamesGraphQLResponse>({
    query: getGamesQuery,
    next: { tags: [TAGS.GAMES_EXPLORE], revalidate: 60 },
    variables: {
      limit
    }
  })

  const games = response.body.data.games.data

  if (!games) {
    return []
  }

  return transformeDataGames(games)
}

export async function getGame(slug: string) {
  const response = await strapiFetch<GameGraphQLResponse>({
    query: getGameQuery,
    next: { tags: [TAGS.GAME_SLUG], revalidate: 60 },
    variables: {
      slug
    }
  })

  const game = response.body.data.games.data[0]

  return transformeDataGame(game)
}
