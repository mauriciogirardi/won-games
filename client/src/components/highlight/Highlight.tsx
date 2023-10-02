'use client'

import { Button } from '../button/Button'
import * as S from './Highlight.styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

export function Highlight({
  subtitle,
  title,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) {
  return (
    <S.HighlightContainer
      backgroundImage={backgroundImage}
      alignment={alignment}
    >
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtile>{subtitle}</S.Subtile>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.HighlightContainer>
  )
}
