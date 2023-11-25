'use client'

import * as S from './LoadingTemplate.styles'
import { Logo } from '@/components/logo/Logo'

export function LoadingTemplate() {
  return (
    <S.LoadingContainer>
      <S.Wrapper>
        <S.Spin />
        <Logo />
      </S.Wrapper>
    </S.LoadingContainer>
  )
}
