import {
  AtributesCategory,
  AtributesCover,
  AtributesDeveloper,
  AtributesGallery,
  AtributesPlatform,
  AtributesPublisher,
  RatingTypes
} from '.'

export type AtributesGame = {
  attributes: {
    name: string
    slug: string
    price: number
    shortDescription: string
    description: string
    releaseDate: string | null
    rating: RatingTypes | null
    cover: AtributesCover | null
    developers: AtributesDeveloper
    gallery: AtributesGallery
    publisher: AtributesPublisher | null
    categories: AtributesCategory
    platforms: AtributesPlatform
  }
}

export type GameGraphQLResponse = {
  data: {
    games: {
      data: AtributesGame[]
    }
  }
  variables: {
    slug: string
  }
}
