'use client'

import * as S from './loading-template.styles'
import { Logo } from '@/components/logo'

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
