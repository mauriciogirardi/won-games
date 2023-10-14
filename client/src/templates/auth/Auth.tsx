'use client'

import { Logo } from '@/components/logo/Logo'
import * as S from './Auth.styles'
import { Heading } from '@/components/heading/Heading'
import { ReactNode } from 'react'

export type AuthProps = {
  children: ReactNode
  title: string
}

export function Auth({ children, title }: AuthProps) {
  return (
    <S.AuthContainer>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="logo-banner" />

          <S.WrapperTitles>
            <Heading color="white" size="huge">
              All your favorite games in one place
            </Heading>
            <S.SubTitle>
              A <strong>WON</strong> is the best an most complete gaming
              platform.
            </S.SubTitle>
          </S.WrapperTitles>

          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo id="logo-form" color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.AuthContainer>
  )
}
