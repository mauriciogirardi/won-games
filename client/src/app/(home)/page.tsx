import { useBannerSlider } from '@/hooks/useBannerSlider'
import { useGames } from '@/hooks/useGames'
import { useHighlight } from '@/hooks/useHighlight'
import { HomeTemplate } from '@/templates/home/HomeTemplate'

export default function App() {
  const { banners } = useBannerSlider()
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
