import { formatCurrency } from '@/utils/format-currency'
import { AttributesGame } from '../../types/game'
import { baseUrl } from '../..'
import { Platform } from '@/components/game-details/GameDetails'
import { IMAGE_DEFAULT } from '../../constants'

export function transformeDataGameDetails(game: AttributesGame) {
  const { attributes } = game
  const {
    name,
    slug,
    categories,
    cover,
    description,
    developers,
    gallery,
    platforms,
    price,
    publisher,
    rating,
    releaseDate,
    shortDescription
  } = attributes

  return {
    title: name,
    img: cover ? `${baseUrl}${cover.data.attributes.src}` : IMAGE_DEFAULT,
    price: formatCurrency(price),
    developer: developers.data[0].attributes.name,
    slug,
    content: description,
    rating,
    shortDescription,
    releaseDate,
    gallery: gallery.data.map(({ attributes }) => ({
      src: `${baseUrl}${attributes.src}` || IMAGE_DEFAULT,
      label: attributes.label
    })),
    publisher: publisher?.data.attributes.name || '',
    categories: categories.data.map(({ attributes }) => attributes.name),
    platforms: platforms.data.map(
      ({ attributes }) => attributes.name
    ) as Platform[]
  }
}
