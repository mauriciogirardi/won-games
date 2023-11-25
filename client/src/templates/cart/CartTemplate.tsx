'use client'

import { PaymentOptions } from '@/components/payment-options/PaymentOptions'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { Container } from '@/components/container/Container'
import { Showcase } from '@/components/showcase/Showcase'
import { CardList } from '@/components/card-list/CardList'
import { Heading } from '@/components/heading/Heading'
import { Divider } from '@/components/divider/Divider'
import { Empty } from '@/components/empty/Empty'

import { items } from '@/components/game-card-slider/mock'
import { initialProps } from '@/components/highlight/mocks'
import { mockCardList } from '@/components/card-list/mock'
import { mockPaymentOptions } from '@/components/payment-options/mock'

import * as S from './CartTemplate.styles'

export function CartTemplate() {
  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My cart
        </Heading>

        {!mockCardList.length && (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers."
            hasLink
          />
        )}

        {mockCardList.length && (
          <S.Content>
            <CardList items={mockCardList} total="$ 430.00" />
            <PaymentOptions
              handlePayment={() => ({})}
              cards={mockPaymentOptions}
            />
          </S.Content>
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these game"
        games={items}
        highlight={initialProps}
      />
    </BaseTemplate>
  )
}
