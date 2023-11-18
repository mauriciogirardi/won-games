'use client'

import { Empty } from '../empty/Empty'
import { GameItem, GameItemProps } from '../game-item/GameItem'
import { Heading } from '../heading/Heading'
import * as S from './OrderList.styles'

export type OrderListProps = {
  items?: GameItemProps[]
}

export function OrderList({ items = [] }: OrderListProps) {
  const hasOrders = items.length > 0

  return (
    <S.OrderListContainer>
      <Heading lineBottom lineColor="primary" size="small">
        My orders
      </Heading>

      {!hasOrders && (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}

      {hasOrders &&
        items.map((item) => <GameItem key={item.downloadLink} {...item} />)}
    </S.OrderListContainer>
  )
}
