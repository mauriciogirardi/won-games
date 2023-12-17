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
  id: string
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
  id: string
  attributes: Pick<
    AttributesGame['attributes'],
    'name' | 'slug' | 'price' | 'cover' | 'developers'
  >
}

export type GetGamesProps = {
  pagination?: Pagination
  sort?: string[] | string | null
  filters?: {
    price?: {
      lte?: number
    }
    categories?: {
      slug?: {
        in?: string[]
      }
    }
    platforms?: {
      name?: {
        in?: string[]
      }
    }
  } | null
}

type Variables = Pagination & {
  filters?: unknown | null
  sort?: string[] | string | null
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

  variables: Variables
}
