'use client'

import { Logo } from '@/components/logo/Logo'
import * as S from './Auth.styles'
import { Heading } from '@/components/heading/Heading'
import { ReactNode } from 'react'
import Link from 'next/link'
import { PATH_HOME } from '@/constants/paths'

export type AuthProps = {
  children: ReactNode
  title: string
}

export function AuthTemplate({ children, title }: AuthProps) {
  return (
    <S.AuthContainer>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href={PATH_HOME}>
            <Logo id="logo-banner" />
          </Link>

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
          <Link href={PATH_HOME}>
            <Logo id="logo-form" color="black" size="large" />
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.AuthContainer>
  )
}
