import { transformeDataGameDetails } from './utils/transformeDataGameDetails'
import { transformeDataGames } from './utils/transformeDataGames'
import { GameGraphQLResponse } from '../types/game'
import { GamesGraphQLResponse } from '../types/game'
import { getGamesQuery } from '../queries/game'
import { getGameQuery } from '../queries/game'
import { strapiFetch } from '..'
import { Pagination } from '../types'
import { TAGS } from '../constants'

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

  return transformeDataGameDetails(game)
}
