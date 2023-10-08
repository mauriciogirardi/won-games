import { useBannerSlider } from '@/hooks/useBannerSlider'
import { useGames } from '@/hooks/useGames'
import { useHighlight } from '@/hooks/useHighlight'
import { Home } from '@/templates/home/Home'

export default function App() {
  const { banners } = useBannerSlider()
  const { games } = useGames()
  const { highlight } = useHighlight()

  return (
    <Home
      banners={banners}
      freeGames={games}
      newGames={games}
      upcomingMoreGames={games}
      mostPopularGames={games}
      upcomingGames={games}
      freeGamesHighlight={highlight}
      mostPopularHighlight={highlight}
      upcomingHighlight={highlight}
    />
  )
}
