import { GamesTemplate } from '@/templates/games/games-template'
import { mockExploreSidebar } from '@/components/explore-sidebar/mock'
import { getGames } from '@/lib/strapi/fetchers/games'

type GamesProps = {
  searchParams: {
    page?: string
    pageSize?: string
  }
}

export default async function Games({ searchParams }: GamesProps) {
  const page = Number(searchParams.page) || 1
  const pageSize = Number(searchParams.pageSize) || 15

  const { games, pagination } = await getGames({
    pagination: { page, pageSize }
  })

  return (
    <GamesTemplate
      filterItems={mockExploreSidebar}
      games={games}
      total={pagination.total}
      page={page}
      pageSize={pageSize}
    />
  )
}
