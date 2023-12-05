'use client'

import { ChevronDown } from 'lucide-react'
import { Suspense } from 'react'

import { Grid } from '@/components/grid/Grid'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { GameCard, GameCardProps } from '@/components/game-card/GameCard'
import {
  ExploreSidebar,
  ItemSidebarProps
} from '@/components/explore-sidebar/ExploreSidebar'

import * as S from './games-template.styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemSidebarProps[]
}

export function GamesTemplate({ games = [], filterItems }: GamesTemplateProps) {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
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

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ChevronDown />
          </S.ShowMore>
        </section>
      </S.GamesContainer>
    </BaseTemplate>
  )
}
