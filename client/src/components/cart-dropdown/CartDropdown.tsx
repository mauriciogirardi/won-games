'use client'

import { GameItemProps } from '../game-item/GameItem'
import { CartIcon } from '../cart-icon/CartIcon'
import { Dropdown } from '../dropdown/Dropdown'
import { CardList } from '../card-list/CardList'

import * as S from './CartDropdown.styles'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

export function CartDropdown({ items, total }: CartDropdownProps) {
  return (
    <S.CartDropdownContainer>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CardList items={items} total={total} hasButton />
      </Dropdown>
    </S.CartDropdownContainer>
  )
}
