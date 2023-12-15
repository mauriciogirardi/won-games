import { getRecommended } from '@/lib/strapi/fetchers/recommended'
import { WishlistTemplate } from '@/templates/wishlist/wishlist-template'

export default async function PageWishlist() {
  const recommended = await getRecommended()

  return <WishlistTemplate recommended={recommended} wishlist={[]} />
}
