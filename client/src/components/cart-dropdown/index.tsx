'use client'

import { GameItemProps } from '../game-item'
import { CartIcon } from '../cart-icon'
import { Dropdown } from '../dropdown'
import { CardList } from '../card-list'

import * as S from './cart-dropdown.styles'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}

export function CartDropdown({ items = [], total }: CartDropdownProps) {
  return (
    <S.CartDropdownContainer>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CardList items={items} total={total} hasButton />
      </Dropdown>
    </S.CartDropdownContainer>
  )
}
