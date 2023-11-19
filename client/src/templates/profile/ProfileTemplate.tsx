'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { BaseTemplate } from '../base-template/BaseTemplate'
import { ProfileMenu } from '@/components/profile-menu/ProfileMenu'
import { Container } from '@/components/container/Container'
import { Heading } from '@/components/heading/Heading'
import * as S from './ProfileTemplate.styles'

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
