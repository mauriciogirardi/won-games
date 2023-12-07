'use client'

import { Suspense } from 'react'

import { Showcase } from '@/components/showcase/Showcase'
import { Container } from '@/components/container/Container'
import { BannerProps } from '@/components/banner/Banner'
import { BannerSlider } from '@/components/banner-slider/BannerSlider'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { GameCardProps } from '@/components/game-card/GameCard'
import { HighlightProps } from '@/components/highlight/Highlight'

import * as S from './HomeTemplate.styles'

type Highlight = {
  title: string
  highlight: HighlightProps | null
}

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: Highlight
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: Highlight
  freeGames: GameCardProps[]
  freeGamesHighlight: Highlight
  newGamesHighlight: Highlight
}

export function HomeTemplate({
  banners,
  newGames,
  freeGames,
  upcomingGames,
  mostPopularGames,
  upcomingHighlight,
  freeGamesHighlight,
  mostPopularHighlight,
  newGamesHighlight
}: HomeProps) {
  return (
    <BaseTemplate>
      <Container>
        <S.SectionBanner>
          <Suspense>
            <BannerSlider items={banners} />
          </Suspense>
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Suspense>
          <Showcase
            title={newGamesHighlight.title}
            games={newGames}
            color="black"
            highlight={newGamesHighlight.highlight}
          />
        </Suspense>
      </S.SectionNews>

      <Suspense>
        <Showcase
          title={mostPopularHighlight.title}
          highlight={mostPopularHighlight.highlight}
          games={mostPopularGames}
        />
      </Suspense>

      <Suspense>
        <Showcase
          title={upcomingHighlight.title}
          games={upcomingGames}
          highlight={upcomingHighlight.highlight}
        />
      </Suspense>

      <Suspense>
        <Showcase
          title={freeGamesHighlight.title}
          highlight={freeGamesHighlight.highlight}
          games={freeGames}
        />
      </Suspense>
    </BaseTemplate>
  )
}
