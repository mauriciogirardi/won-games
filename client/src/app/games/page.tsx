import { GamesTemplate } from '@/templates/games/games-template'
import { mockExploreSidebar } from '@/components/explore-sidebar/mock'
import { getGames } from '@/lib/strapi/fetchers/games'

export default async function Games() {
  const games = await getGames()

  return <GamesTemplate games={games} filterItems={mockExploreSidebar} />
}
