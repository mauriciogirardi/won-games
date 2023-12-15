'use client'

import Image from 'next/image'

import { Heading } from '../heading'
import { PaymentCard } from '../payment-options'
import * as S from './cards-list.styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <>
      <Heading lineBottom size="small">
        My cards
      </Heading>

      {cards?.map((card) => (
        <S.Card key={card.flag}>
          <Image src={card.img} alt={card.flag} width={38} height={24} />
          <span>{card.number}</span>
        </S.Card>
      ))}
    </>
  )
}
