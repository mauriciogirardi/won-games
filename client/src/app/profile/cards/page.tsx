import { CardsList } from '@/components/cards-list'
import { mockPaymentOptions } from '@/components/payment-options/mock/payment-options'
import { ProfileTemplate } from '@/templates/profile/profile-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cards'
}

export default function ProfileCards() {
  return (
    <ProfileTemplate>
      <CardsList cards={mockPaymentOptions} />
    </ProfileTemplate>
  )
}
