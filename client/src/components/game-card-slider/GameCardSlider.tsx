'use client'

import { GameCard, GameCardProps } from '../game-card/GameCard'
import { Slider, SliderSettings } from '../slider/Slider'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import * as S from './GameCardSlider.styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  nextArrow: <ArrowLeft aria-label="Next games" />,
  prevArrow: <ArrowRight aria-label="Previous games" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export function GameCardSlider({
  items,
  color = 'black'
}: GameCardSliderProps) {
  return (
    <S.GameCardSliderContainer color={color}>
      <Slider settings={settings}>
        {items?.map((item) => <GameCard key={item.title} {...item} />)}
      </Slider>
    </S.GameCardSliderContainer>
  )
}
