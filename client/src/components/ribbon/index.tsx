'use client'

import { ReactNode } from 'react'
import * as S from './ribbon.styles'

export type ColorTypes = 'primary' | 'secondary'
export type SizesTypes = 'normal' | 'small'

export type RibbonTypes = {
  name: string
  size?: SizesTypes
  color?: ColorTypes
}
export type RibbonProps = {
  children: ReactNode
  color?: ColorTypes
  size?: SizesTypes
}

export function Ribbon({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) {
  return (
    <S.RibbonContainer color={color} size={size}>
      {children}
    </S.RibbonContainer>
  )
}
