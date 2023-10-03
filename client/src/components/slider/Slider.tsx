'use client'

import SlickSlider, { Settings } from 'react-slick'
import * as S from './Slider.styles'
import { ReactNode } from 'react'

export type SliderSettings = Settings
export type SliderProps = {
  settings: SliderSettings
  children: ReactNode
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <S.SliderContainer>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.SliderContainer>
  )
}
