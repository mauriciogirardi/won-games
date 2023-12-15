'use client'

import { Ribbon, RibbonTypes } from '../ribbon'
import { Button } from '../button'
import * as S from './banner.styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: RibbonTypes
}

export function Banner({
  title,
  subtitle,
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
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.BannerContainer>
  )
}
