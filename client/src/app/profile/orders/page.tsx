import { OrderList } from '@/components/order-list'
import { mockOrderList } from '@/components/order-list/mock/order-list'
import { ProfileTemplate } from '@/templates/profile/profile-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orders'
}

export default function ProfileOrders() {
  return (
    <ProfileTemplate>
      <OrderList items={mockOrderList} />
    </ProfileTemplate>
  )
}
