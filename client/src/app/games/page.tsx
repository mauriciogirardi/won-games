import { GamesTemplate } from '@/templates/games/GamesTemplate'
import { mockExploreSidebar } from '@/components/explore-sidebar/mock'
import { items } from '@/components/game-card-slider/mock'

export default function Games() {
  return <GamesTemplate games={items} filterItems={mockExploreSidebar} />
}
