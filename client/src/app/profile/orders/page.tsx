import { OrderList } from '@/components/order-list/OrderList'
import { mockOrderList } from '@/components/order-list/mock'
import { ProfileTemplate } from '@/templates/profile/ProfileTemplate'

export default function ProfileOrders() {
  return (
    <ProfileTemplate>
      <OrderList items={mockOrderList} />
    </ProfileTemplate>
  )
}
