import { ReactNode } from 'react'
import * as S from './base-template.styles'
import { Menu } from '@/components/menu'
import { Footer } from '@/components/footer'
import { Container } from '@/components/container'

export type BaseTemplateProps = {
  children: ReactNode
}

export function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <S.BaseTemplateContainer>
      <Container>
        <Menu />
      </Container>

      <S.Main>{children}</S.Main>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.BaseTemplateContainer>
  )
}
