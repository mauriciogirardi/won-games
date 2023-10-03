'use client'

import { Banner, BannerProps } from '../banner/Banner'
import { Slider, SliderSettings } from '../slider/Slider'
import * as S from './BannerSlider.styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export function BannerSlider({ items }: BannerSliderProps) {
  return (
    <S.BannerSliderContainer>
      <Slider settings={settings}>
        {items?.map((item) => <Banner key={item.title} {...item} />)}
      </Slider>
    </S.BannerSliderContainer>
  )
}
