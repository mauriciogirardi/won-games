'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { BaseTemplate } from '../base/base-template'
import { ProfileMenu } from '@/components/profile-menu'
import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import * as S from './profile-template.styles'

type ProfileProps = {
  children: ReactNode
}

export function ProfileTemplate({ children }: ProfileProps) {
  const pathname = usePathname()

  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={pathname} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </BaseTemplate>
  )
}
