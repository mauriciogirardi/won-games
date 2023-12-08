import { formatCurrency } from '@/utils/format-currency'
import { AttributesGames } from '../../types/game'
import { IMAGE_DEFAULT } from '../../constants'
import { BASE_URL } from '@/constants'

export function transformeDataGames(games: AttributesGames[]) {
  return games.map(
    ({ attributes: { name, price, cover, developers, slug } }) => ({
      title: name,
      img: cover ? `${BASE_URL}${cover.data.attributes.src}` : IMAGE_DEFAULT,
      price: formatCurrency(price),
      developer: developers.data[0].attributes.name,
      slug
    })
  )
}
