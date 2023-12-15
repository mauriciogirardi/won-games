import {
  ResponseUpcoming,
  Upcoming,
  UpcomingGraphQLResponse
} from '../types/upcoming'
import { transformeDataHighlight } from './utils/transforme-data-highlight'
import { transformeDataGames } from './utils/transforme-data-games'
import { getUpcomingQuery } from '../queries/upcoming'
import { strapiFetch } from '..'

function parsedDataUpcoming(upcoming: Upcoming): ResponseUpcoming {
  const { showcase, upcomingGames } = upcoming
  const { highlight, title } = showcase.data.attributes.upcomingGames

  const games = transformeDataGames(upcomingGames.data)
  const parsedHighlight = transformeDataHighlight(title, highlight)

  return {
    games,
    title: parsedHighlight.title,
    highlight: parsedHighlight.highlight
  }
}

export async function getDataUpcoming() {
  const today = new Date().toISOString().slice(0, 10) // 0000-00-00
  const { body } = await strapiFetch<UpcomingGraphQLResponse>({
    query: getUpcomingQuery,
    variables: {
      date: today
    }
  })

  const response = body.data
  return parsedDataUpcoming(response)
}
