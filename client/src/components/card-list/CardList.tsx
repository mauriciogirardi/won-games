import { GameItem, GameItemProps } from '../game-item/GameItem'
import * as S from './CardList.styles'

export type CardListProps = {
  items: GameItemProps[]
  total: string
}

export function CardList({ items, total }: CardListProps) {
  return (
    <S.CardListContainer>
      {items?.map((item) => <GameItem key={item.title} {...item} />)}

      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.CardListContainer>
  )
}
