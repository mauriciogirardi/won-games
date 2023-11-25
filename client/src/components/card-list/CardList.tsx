'use client'

import Link from 'next/link'

import { GameItem, GameItemProps } from '../game-item/GameItem'
import { PATH_CART } from '@/constants/paths'
import { Button } from '../button/Button'

import * as S from './CardList.styles'

export type CardListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

export function CardList({ items, total, hasButton = false }: CardListProps) {
  return (
    <S.CardListContainer>
      {items?.map((item) => <GameItem key={item.title} {...item} />)}

      <S.Footer>
        {!hasButton && <span>Total</span>}
        <S.Total>{total}</S.Total>
        {hasButton && (
          <Link href={PATH_CART}>
            <Button as="span">By it now</Button>
          </Link>
        )}
      </S.Footer>
    </S.CardListContainer>
  )
}
