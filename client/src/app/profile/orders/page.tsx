import { OrderList } from '@/components/order-list'
import { mockOrderList } from '@/components/order-list/mock/order-list'
import { ProfileTemplate } from '@/templates/profile/profile-template'

export default function ProfileOrders() {
  return (
    <ProfileTemplate>
      <OrderList items={mockOrderList} />
    </ProfileTemplate>
  )
}
