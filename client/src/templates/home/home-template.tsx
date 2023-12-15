'use client'

import { Showcase } from '@/components/showcase'
import { Container } from '@/components/container'
import { BannerProps } from '@/components/banner'
import { BannerSlider } from '@/components/banner-slider'
import { BaseTemplate } from '../base/base-template'
import { GameCardProps } from '@/components/game-card'
import { HighlightProps } from '@/components/highlight'

import * as S from './home-template.styles'

export type Highlight = {
  title: string | undefined
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
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase
          title={newGamesHighlight.title}
          games={newGames}
          color="black"
          highlight={newGamesHighlight.highlight}
        />
      </S.SectionNews>

      <Showcase
        title={mostPopularHighlight.title}
        highlight={mostPopularHighlight.highlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingHighlight.title}
        games={upcomingGames}
        highlight={upcomingHighlight.highlight}
      />

      <Showcase
        title={freeGamesHighlight.title}
        highlight={freeGamesHighlight.highlight}
        games={freeGames}
      />
    </BaseTemplate>
  )
}
