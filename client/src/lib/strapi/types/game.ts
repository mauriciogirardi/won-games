import {
  AttributesCategory,
  AttributesDeveloper,
  AttributesGallery,
  AttributesPlatform,
  AttributesPublisher,
  AttributesCover,
  RatingTypes,
  Pagination
} from '.'

// TYPE GAME

export type Game = {
  games: {
    title: string
    img: string
    price: string
    developer: string
    slug: string
  }[]
  pagination: {
    total: number
    pageCount: number
    page: number
    pageSize: number
  }
}

export type AttributesGame = {
  attributes: {
    name: string
    slug: string
    price: number
    shortDescription: string
    description: string
    releaseDate: string | null
    rating: RatingTypes | null
    cover: AttributesCover | null
    developers: AttributesDeveloper
    gallery: AttributesGallery
    publisher: AttributesPublisher | null
    categories: AttributesCategory
    platforms: AttributesPlatform
  }
}

export type GameGraphQLResponse = {
  data: {
    games: {
      data: AttributesGame[]
    }
  }
  variables: {
    slug: string
  }
}

// TYPES GAMES

export type AttributesGames = {
  attributes: Pick<
    AttributesGame['attributes'],
    'name' | 'slug' | 'price' | 'cover' | 'developers'
  >
}

export type GetGamesProps = {
  pagination?: Pagination
}

export type GamesGraphQLResponse = {
  data: {
    games: {
      data: AttributesGames[]
      meta: {
        pagination: {
          total: number
          pageCount: number
          page: number
          pageSize: number
        }
      }
    }
  }

  variables: Pagination
}
