'use client'

import { ChevronDown } from 'lucide-react'
import { Suspense } from 'react'

import {
  ExploreSidebar,
  ItemSidebarProps
} from '@/components/explore-sidebar/ExploreSidebar'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { GameCard, GameCardProps } from '@/components/game-card/GameCard'
import { Grid } from '@/components/grid/Grid'

import * as S from './games-template.styles'
import { Pagination } from '@/components/pagination/pagination'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemSidebarProps[]
  page: number
  pageSize: number
  total: number
}

export async function GamesTemplate({
  filterItems,
  games,
  page,
  pageSize,
  total
}: GamesTemplateProps) {
  const handleFilter = () => {
    return
  }

  return (
    <BaseTemplate>
      <S.GamesContainer>
        <ExploreSidebar onFilter={handleFilter} sidebars={filterItems} />

        <section>
          <Grid>
            <Suspense>
              {games?.map((item) => <GameCard key={item.title} {...item} />)}
            </Suspense>
          </Grid>

          <Pagination page={page} pageSize={pageSize} total={total} />
        </section>
      </S.GamesContainer>
    </BaseTemplate>
  )
}
