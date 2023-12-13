'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import {
  ExploreSidebar,
  ItemSidebarProps
} from '@/components/explore-sidebar/ExploreSidebar'
import { buildURL, parseQueryStringToFilter } from '@/filter'
import { GameCard, GameCardProps } from '@/components/game-card/GameCard'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { Pagination } from '@/components/pagination/pagination'
import { Grid } from '@/components/grid/Grid'

import * as S from './games-template.styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemSidebarProps[]
  page: number
  pageSize: number
  total: number
}

type QueryItems = {
  [key: string]: string | string[] | boolean
}

export async function GamesTemplate({
  filterItems,
  games,
  page,
  pageSize,
  total
}: GamesTemplateProps) {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState({})
  const [queryString, setQueryString] = useState<QueryItems>({})

  const showPagination = pageSize <= total

  const handleFilter = (items: QueryItems) => {
    const path = buildURL(`/games?page=${page}&pageSize=${pageSize}`, items)
    setQueryString(items)
    push(path, { scroll: false })
    return
  }

  useEffect(() => {
    setQuery({
      platforms: searchParams.getAll('platforms'),
      sort_by: searchParams.get('sort'),
      price: searchParams.get('price'),
      categories: searchParams.getAll('categories')
    })
  }, [searchParams])

  return (
    <BaseTemplate>
      <S.GamesContainer>
        <ExploreSidebar
          onFilter={handleFilter}
          sidebars={filterItems}
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
        />

        <section>
          <Grid>
            <Suspense>
              {games?.map((item) => <GameCard key={item.title} {...item} />)}
            </Suspense>
          </Grid>

          {showPagination && (
            <Pagination
              page={page}
              pageSize={pageSize}
              total={total}
              query={queryString}
            />
          )}
        </section>
      </S.GamesContainer>
    </BaseTemplate>
  )
}
