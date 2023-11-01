'use client'

import { ShoppingCart, Heart } from 'lucide-react'
import { Ribbon, RibbonTypes } from '../ribbon/Ribbon'
import { Button } from '../button/Button'
import { themes } from '@/styles/themes'

import * as S from './GameCard.styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  ribbon?: RibbonTypes
  favorite?: boolean
  onFavorite?: () => void
}

export function GameCard({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  ribbon,
  favorite = false,
  onFavorite
}: GameCardProps) {
  return (
    <S.GameCardContainer>
      {!!ribbon && (
        <Ribbon color={ribbon.color} size={ribbon.size}>
          {ribbon.name}
        </Ribbon>
      )}

      <S.ImageBox>
        <S.Image src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
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
