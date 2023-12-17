import { getRecommended } from '@/lib/strapi/fetchers/recommended'
import { CartTemplate } from '@/templates/cart/cart-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cart'
}

export default async function CartPage() {
  const recommended = await getRecommended()

  return <CartTemplate recommended={recommended} />
}
