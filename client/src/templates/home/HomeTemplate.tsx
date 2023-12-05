'use client'

import { Suspense } from 'react'

import * as S from './HomeTemplate.styles'
import { Showcase } from '@/components/showcase/Showcase'
import { Container } from '@/components/container/Container'
import { BannerProps } from '@/components/banner/Banner'
import { BannerSlider } from '@/components/banner-slider/BannerSlider'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { GameCardProps } from '@/components/game-card/GameCard'
import { HighlightProps } from '@/components/highlight/Highlight'

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

export function HomeTemplate({
  banners,
  newGames,
  freeGames,
  upcomingGames,
  mostPopularGames,
  upcomingHighlight,
  freeGamesHighlight,
  mostPopularHighlight
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
        <Suspense fallback={<p>Loading New Games</p>}>
          <Showcase title="News" games={newGames} color="black" />
        </Suspense>
      </S.SectionNews>

      <Suspense fallback={<p>Loading Most Popular</p>}>
        <Showcase
          title="Most popular"
          highlight={mostPopularHighlight}
          games={mostPopularGames}
        />
      </Suspense>

      <Suspense fallback={<p>Loading Upcoming</p>}>
        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />
      </Suspense>

      <Suspense fallback={<p>Loading Free Games</p>}>
        <Showcase
          title="Free games"
          highlight={freeGamesHighlight}
          games={freeGames}
        />
      </Suspense>
    </BaseTemplate>
  )
}
