import { CardsList } from '@/components/cards-list/CardsList'
import { mockPaymentOptions } from '@/components/payment-options/mock'
import { ProfileTemplate } from '@/templates/profile/ProfileTemplate'

export default function ProfileCards() {
  return (
    <ProfileTemplate>
      <CardsList cards={mockPaymentOptions} />
    </ProfileTemplate>
  )
}
