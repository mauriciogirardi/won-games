'use client'

import { GameCardSlider } from '../game-card-slider/GameCardSlider'
import { GameCardProps } from '../game-card/GameCard'
import { Heading } from '../heading/Heading'
import { Highlight, HighlightProps } from '../highlight/Highlight'
import * as S from './Showcase.styles'

export type ShowcaseProps = {
  title?: string
  color?: 'white' | 'black'
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export function Showcase({
  title,
  color = 'white',
  games,
  highlight
}: ShowcaseProps) {
  return (
    <S.ShowcaseContainer>
      {!!title && (
        <Heading lineLeft lineColor="secondary" color={color}>
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} color={color} />}
    </S.ShowcaseContainer>
  )
}
