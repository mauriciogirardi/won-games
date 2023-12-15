'use client'

import { ShoppingCart, Heart } from 'lucide-react'
import { Ribbon, RibbonTypes } from '../ribbon'
import { Button } from '../button'
import { themes } from '@/styles/themes'

import * as S from './game-card.styles'
import Link from 'next/link'
import { PATH_GAME_SLUG } from '@/constants/paths'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  ribbon?: RibbonTypes
  favorite?: boolean
  onFavorite?: () => void
  slug: string
}

export function GameCard({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  ribbon,
  favorite = false,
  onFavorite,
  slug
}: GameCardProps) {
  const pathSlug = `${PATH_GAME_SLUG.replace(':slug', slug)}`

  return (
    <S.GameCardContainer>
      {!!ribbon && (
        <Ribbon color={ribbon.color} size={ribbon.size}>
          {ribbon.name}
        </Ribbon>
      )}

      <Link href={pathSlug}>
        <S.ImageBox>
          <S.Image src={img} alt={title} width={400} height={300} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <S.Info href={pathSlug}>
          <S.Title title={title}>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role="button" onClick={onFavorite}>
          {favorite ? (
            <Heart
              aria-label="Remove from wishlist"
              fill={themes.colors.primary}
            />
          ) : (
            <Heart aria-label="Add to wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button
            icon={<ShoppingCart aria-label="Add to cart" />}
            size="small"
          />
        </S.BuyBox>
      </S.Content>
    </S.GameCardContainer>
  )
}
