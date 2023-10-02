'use client'

import { Button } from '../button/Button'
import { Ribbon, RibbonTypes } from '../ribbon/Ribbon'
import * as S from './Banner.styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: RibbonTypes
}

export function Banner({
  title,
  subTitle,
  img,
  buttonLabel,
  buttonLink,
  ribbon
}: BannerProps) {
  return (
    <S.BannerContainer>
      <S.Image src={img} role="img" aria-label={title} />
      {!!ribbon && (
        <Ribbon color={ribbon.color} size={ribbon.size}>
          {ribbon.name}
        </Ribbon>
      )}

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
