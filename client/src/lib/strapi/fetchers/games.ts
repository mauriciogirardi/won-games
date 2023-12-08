import { transformeDataGameDetails } from './utils/transformeDataGameDetails'
import { transformeDataGames } from './utils/transformeDataGames'
import { GameGraphQLResponse, GetGamesProps } from '../types/game'
import { GamesGraphQLResponse } from '../types/game'
import { getGamesQuery } from '../queries/game'
import { getGameQuery } from '../queries/game'
import { strapiFetch } from '..'
import { TAGS } from '../constants'

export async function getGames({ pagination }: GetGamesProps = {}) {
  const response = await strapiFetch<GamesGraphQLResponse>({
    query: getGamesQuery,
    next: { tags: [TAGS.GAMES_EXPLORE], revalidate: 60 },
    variables: {
      pageSize: pagination?.pageSize || 15,
      page: pagination?.page || 1
    }
  })

  const { data, meta } = response.body.data.games

  return {
    games: transformeDataGames(data),
    pagination: meta.pagination
  }
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
