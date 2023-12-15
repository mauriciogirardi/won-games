'use client'

import { ReactNode } from 'react'
import * as S from './heading.styles'

export type LineColorType = 'secondary' | 'primary'
export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'medium' | 'small' | 'huge'
  lineColor?: LineColorType
}

export function Heading({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) {
  return (
    <S.HeadingContainer
      lineBottom={lineBottom}
      lineLeft={lineLeft}
      color={color}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </S.HeadingContainer>
  )
}
