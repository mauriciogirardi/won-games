'use client'

import { ReactNode } from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

export function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <S.HeadingContainer
      lineBottom={lineBottom}
      lineLeft={lineLeft}
      color={color}
    >
      {children}
    </S.HeadingContainer>
  )
}
