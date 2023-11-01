'use client'

import { Button } from '../button/Button'
import { Heading } from '../heading/Heading'
import * as S from './GameInfo.styles'
import { Ribbon } from '../ribbon/Ribbon'
import { Heart, ShoppingCart } from 'lucide-react'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export function GameInfo({ description, price, title }: GameInfoProps) {
  return (
    <S.GameInfoContainer>
      <Heading lineBottom>{title}</Heading>
      <Ribbon color="secondary">{price}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.WrapperButton>
        <Button icon={<ShoppingCart size={22} />} size="large">
          Add to cart
        </Button>
        <Button minimal icon={<Heart size={22} />} size="large">
          Wishlist
        </Button>
      </S.WrapperButton>
    </S.GameInfoContainer>
  )
}
