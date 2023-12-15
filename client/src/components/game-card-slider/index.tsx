'use client'

import { GameCard, GameCardProps } from '../game-card'
import { Slider, SliderSettings } from '../slider'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import * as S from './game-card-slider.styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  nextArrow: <ChevronRight aria-label="Next games" size={24} />,
  prevArrow: <ChevronLeft aria-label="Previous games" size={24} />,
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
