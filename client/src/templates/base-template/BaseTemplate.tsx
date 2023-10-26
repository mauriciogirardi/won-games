import { ReactNode } from 'react'
import * as S from './BaseTemplate.styles'
import { Menu } from '@/components/menu/Menu'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@/components/container/Container'

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
