'use client'

import { ResponseRecommended } from '@/lib/strapi/types/recommended'
import { PaymentOptions } from '@/components/payment-options/PaymentOptions'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { Container } from '@/components/container/Container'
import { Showcase } from '@/components/showcase/Showcase'
import { CardList } from '@/components/card-list/CardList'
import { Heading } from '@/components/heading/Heading'
import { Divider } from '@/components/divider/Divider'
import { Empty } from '@/components/empty/Empty'

import { mockPaymentOptions } from '@/components/payment-options/mock'
import { mockCardList } from '@/components/card-list/mock'

import * as S from './CartTemplate.styles'

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
