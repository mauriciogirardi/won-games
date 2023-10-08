'use client'

import * as S from './Home.styles'
import { Menu } from '@/components/menu/Menu'
import { Footer } from '@/components/footer/Footer'
import { Heading } from '@/components/heading/Heading'
import { Container } from '@/components/container/Container'
import { BannerProps } from '@/components/banner/Banner'
import { BannerSlider } from '@/components/banner-slider/BannerSlider'
import { GameCardProps } from '@/components/game-card/GameCard'
import { GameCardSlider } from '@/components/game-card-slider/GameCardSlider'
import { Highlight, HighlightProps } from '@/components/highlight/Highlight'

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

export function Home({
  banners,
  newGames,
  freeGames,
  upcomingGames,
  mostPopularGames,
  upcomingMoreGames,
  upcomingHighlight,
  freeGamesHighlight,
  mostPopularHighlight
}: HomeProps) {
  return (
    <S.Sections>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={newGames} />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary" color="white">
            Most popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} color="white" />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary" color="white">
            Upcoming
          </Heading>
          <GameCardSlider items={upcomingGames} color="white" />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} color="white" />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary" color="white">
            Free games
          </Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider items={freeGames} color="white" />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Sections>
  )
}
