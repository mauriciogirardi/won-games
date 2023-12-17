'use client'

import * as S from './loading-template.styles'

export function LoadingTemplate() {
  return (
    <S.LoadingContainer>
      <S.Wrapper>
        <S.Spin />
        <S.Logo src='/img/logo.png' alt='Video game control'/>
      </S.Wrapper>
    </S.LoadingContainer>
  )
}
