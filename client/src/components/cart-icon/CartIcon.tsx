'use client'

import { ShoppingCart } from 'lucide-react'
import * as S from './CartIcon.styles'

export type CartIconProps = {
  quantity?: number
}

export function CartIcon({ quantity = 0 }: CartIconProps) {
  return (
    <S.CartIconContainer>
      <ShoppingCart aria-label="Shopping Cart" />
      {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    </S.CartIconContainer>
  )
}
