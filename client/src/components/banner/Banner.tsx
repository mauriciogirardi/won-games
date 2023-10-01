'use client'

import { Button } from '../button/Button'
import * as S from './Banner.styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
}

export function Banner({
  title,
  subTitle,
  img,
  buttonLabel,
  buttonLink
}: BannerProps) {
  return (
    <S.BannerContainer>
      <S.Image src={img} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subTitle }} />
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.BannerContainer>
  )
}
