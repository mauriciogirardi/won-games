import { getDataHome } from '@/lib/strapi/fetchers/home'
import { HomeTemplate } from '@/templates/home/home-template'
import { Metadata } from 'next'

export const revalidate = 60 // revalidate at most every one minute
export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Home'
}

export default async function App() {
  const {
    banners,
    freeGames,
    freeGamesHighlight,
    newGames,
    upcomingGames,
    mostPopularGames,
    mostPopularHighlight,
    upcomingHighlight,
    newGamesHighlight
  } = await getDataHome()

  return (
    <HomeTemplate
      banners={banners}
      freeGames={freeGames}
      newGames={newGames}
      mostPopularGames={mostPopularGames}
      upcomingGames={upcomingGames}
      freeGamesHighlight={freeGamesHighlight}
      mostPopularHighlight={mostPopularHighlight}
      upcomingHighlight={upcomingHighlight}
      newGamesHighlight={newGamesHighlight}
    />
  )
}
