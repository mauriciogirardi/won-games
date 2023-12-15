import { CardsList } from '@/components/cards-list'
import { mockPaymentOptions } from '@/components/payment-options/mock/payment-options'
import { ProfileTemplate } from '@/templates/profile/profile-template'

export default function ProfileCards() {
  return (
    <ProfileTemplate>
      <CardsList cards={mockPaymentOptions} />
    </ProfileTemplate>
  )
}
