import { useGames } from '@/hooks/useGames'
import { useHighlight } from '@/hooks/useHighlight'
import { getBanners } from '@/lib/strapi/fetchers/home'
import { HomeTemplate } from '@/templates/home/HomeTemplate'

export const revalidate = 60 // revalidate at most every one minute

export default async function App() {
  const banners = await getBanners()

  const { games } = useGames()
  const { highlight } = useHighlight()

  return (
    <HomeTemplate
      banners={banners}
      freeGames={games}
      newGames={games}
      mostPopularGames={games}
      upcomingGames={games}
      freeGamesHighlight={highlight}
      mostPopularHighlight={highlight}
      upcomingHighlight={highlight}
    />
  )
}
