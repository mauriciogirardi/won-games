'use client'

import { Plus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

import { Heading } from '../heading'
import { Button } from '../button'
import { Radio } from '../radio'
import * as S from './payment-options.styles'

export type PaymentCard = {
  img: string
  number: string
  flag: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export function PaymentOptions({ handlePayment, cards }: PaymentOptionsProps) {
  const [checked, setChecked] = useState(false)

  return (
    <S.PaymentOptionsContainer>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>
      </S.Body>

      <S.CardsList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <Image src={card.img} alt={card.flag} width={38} height={24} />
              {card.number}
            </S.CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => setChecked(true)}
            />
          </S.CardItem>
        ))}

        <S.AddCard role="button">
          <Plus size={14} /> Add a new credit card
        </S.AddCard>
      </S.CardsList>

      <S.Footer>
        <Button as="a" minimal fullWidth>
          Continue shopping
        </Button>
        <Button
          disabled={!checked}
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.PaymentOptionsContainer>
  )
}
