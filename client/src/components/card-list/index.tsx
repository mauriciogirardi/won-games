'use client'

import Link from 'next/link'

import { GameItem, GameItemProps } from '../game-item'
import { PATH_CART } from '@/constants/paths'
import { Button } from '../button'

import * as S from './card-list.styles'
import { Empty } from '../empty'

export type CardListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

export function CardList({
  items = [],
  total,
  hasButton = false
}: CardListProps) {
  const isEmpty = items.length > 0

  return (
    <S.CardListContainer isEmpty={!isEmpty}>
      {isEmpty ? (
        <>
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
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </S.CardListContainer>
  )
}
