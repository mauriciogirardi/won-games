'use client'

import * as S from './Home.styles'
import { Container } from '@/components/container/Container'
import { BannerProps } from '@/components/banner/Banner'
import { BannerSlider } from '@/components/banner-slider/BannerSlider'
import { GameCardProps } from '@/components/game-card/GameCard'
import { HighlightProps } from '@/components/highlight/Highlight'
import { Showcase } from '@/components/showcase/Showcase'
import { BaseTemplate } from '../base-template/BaseTemplate'

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

export function Home({
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
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title="Most popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title="Free games"
        highlight={freeGamesHighlight}
        games={freeGames}
      />
    </BaseTemplate>
  )
}
