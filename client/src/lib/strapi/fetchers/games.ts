import { transformeDataGameDetails } from './utils/transforme-data-game-details'
import { transformeDataGames } from './utils/transforme-data-games'
import { GameGraphQLResponse, GetGamesProps } from '../types/game'
import { GamesGraphQLResponse } from '../types/game'
import { getGamesQuery } from '../queries/game'
import { getGameQuery } from '../queries/game'
import { strapiFetch } from '..'
import { TAGS } from '../constants'

export async function getGames({
  pagination: dataPagination,
  filters,
  sort
}: GetGamesProps = {}) {
  const response = await strapiFetch<GamesGraphQLResponse>({
    query: getGamesQuery,
    next: { tags: [TAGS.GAMES_EXPLORE] },
    variables: {
      pageSize: dataPagination?.pageSize || 15,
      page: dataPagination?.page || 1,
      ...(sort && { sort }),
      ...(filters && { filters })
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
    next: { tags: [TAGS.GAME_SLUG] },
    variables: {
      slug
    }
  })

  const game = response.body.data.games.data[0]

  return transformeDataGameDetails(game)
}
