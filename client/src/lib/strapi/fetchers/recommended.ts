import {
  Recommended,
  RecommendedGraphQLResponse,
  ResponseRecommended
} from '../types/recommended'
import { transformeDataHighlight } from './utils/transforme-data-highlight'
import { transformeDataGames } from './utils/transforme-data-games'
import { getRecommendedQuery } from '../queries/recommended'
import { strapiFetch } from '..'

function parsedDataRecommended(recommended: Recommended): ResponseRecommended {
  const { title, games, highlight } = recommended

  const parsedGames = transformeDataGames(games.data)
  const parsedHighlight = transformeDataHighlight(undefined, highlight)
    ?.highlight

  return {
    title: title,
    games: parsedGames,
    highlight: parsedHighlight
  }
}

export async function getRecommended() {
  const { body } = await strapiFetch<RecommendedGraphQLResponse>({
    query: getRecommendedQuery
  })

  const response = body.data.recommended.data.attributes.section

  return parsedDataRecommended(response)
}
