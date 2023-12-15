import { transformeDataHighlight } from './utils/transforme-data-highlight'
import { transformeDataBanners } from './utils/transforme-data-banners'
import { transformeDataGames } from './utils/transforme-data-games'
import { HomeGraphQLResponse } from '../types/home'
import { getHomeQuery } from '../queries/home'
import { strapiFetch } from '..'

function parsedDataBanners(home: HomeGraphQLResponse['data']) {
  const { banners, freeGames, newGames, sections, upcomingGames } = home
  const sectionsData = sections.data.attributes

  const parsedBanners = transformeDataBanners(banners.data)
  const parsedFreeGames = transformeDataGames(freeGames.data)
  const parsedNewGames = transformeDataGames(newGames.data)
  const parsedUpcomingGames = transformeDataGames(upcomingGames.data)
  const parsedMostPopularGames = transformeDataGames(
    sectionsData.popularGames.games.data
  )

  const parsedFreeGamesHighlight = transformeDataHighlight(
    sectionsData.freeGames.title,
    sectionsData.freeGames.highlight
  )

  const parsedMostPopularHighlight = transformeDataHighlight(
    sectionsData.popularGames.title,
    sectionsData.popularGames.highlight
  )

  const parsedUpcomingHighlight = transformeDataHighlight(
    sectionsData.upcomingGames.title,
    sectionsData.upcomingGames.highlight
  )

  const parsedNewGamesHighlight = transformeDataHighlight(
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

  return parsedDataBanners(response)
}
