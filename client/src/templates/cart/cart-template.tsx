'use client'

import { ResponseRecommended } from '@/lib/strapi/types/recommended'
import { PaymentOptions } from '@/components/payment-options'
import { BaseTemplate } from '../base/base-template'
import { Container } from '@/components/container'
import { Showcase } from '@/components/showcase'
import { CardList } from '@/components/card-list'
import { Heading } from '@/components/heading'
import { Divider } from '@/components/divider'
import { Empty } from '@/components/empty'

import { mockPaymentOptions } from '@/components/payment-options/mock/payment-options'
import { mockCardList } from '@/components/card-list/mock/mock-card-list'

import * as S from './cart-template.styles'

export type CartTemplateProps = {
  recommended: ResponseRecommended
}

export function CartTemplate({ recommended }: CartTemplateProps) {
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
        title={recommended.title}
        games={recommended.games}
        highlight={recommended.highlight}
      />
    </BaseTemplate>
  )
}
