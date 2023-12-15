'use client'

import SlickSlider, { Settings } from 'react-slick'
import * as S from './slider.styles'
import { ReactNode, ForwardRefRenderFunction, forwardRef } from 'react'

export type SliderSettings = Settings
export type SliderProps = {
  settings: SliderSettings
  children: ReactNode
}

export const SliderMain: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { settings, children },
  ref
) => {
  return (
    <S.SliderContainer>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.SliderContainer>
  )
}

export const Slider = forwardRef(SliderMain)
