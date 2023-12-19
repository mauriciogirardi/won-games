import { Metadata } from 'next'

import { parseQueryStringToWhere } from '@/filter'
import { GamesTemplate } from '@/templates/games/games-template'
import { filterItems } from '@/filter/filter-datas'
import { getGames } from '@/lib/strapi/fetchers/games'

export const revalidate = 60 * 60

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
  const hasFilter = Object.keys(filters).length === 0
  const { games, pagination } = await getGames({
    ...(hasFilter && { pagination: { page, pageSize } }),
    ...(!hasFilter && { filters }),
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
