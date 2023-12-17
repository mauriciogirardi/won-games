import { GamesTemplate } from '@/templates/games/games-template'
import { getGames } from '@/lib/strapi/fetchers/games'
import { filterItems } from '@/filter/filter-datas'
import { parseQueryStringToWhere } from '@/filter'
import { Metadata } from 'next'

type GamesProps = {
  searchParams: {
    page?: string
    pageSize?: string
    name?: string
    platform?: string
    sort?: string | null
  }
}

export const metadata: Metadata = {
  title: 'Games'
}

export default async function Games({ searchParams }: GamesProps) {
  const page = Number(searchParams.page) || 1
  const pageSize = Number(searchParams.pageSize) || 15
  const sort = searchParams.sort
  const filters = parseQueryStringToWhere({
    queryString: searchParams,
    filterItems
  })

  const { games, pagination } = await getGames({
    pagination: { page, pageSize },
    ...(filters && { filters }),
    ...(sort && { sort })
  })

  return (
    <GamesTemplate
      filterItems={filterItems}
      games={games}
      total={pagination.total}
      page={page}
      pageSize={pageSize}
    />
  )
}
