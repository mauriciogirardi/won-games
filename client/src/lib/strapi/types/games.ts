import { AtributesCover, AtributesDeveloper } from '.'

export type AtributesGames = {
  attributes: {
    name: string
    slug: string
    price: number
    cover: AtributesCover
    developers: AtributesDeveloper
  }
}

export type Pagination = {
  limit?: number
  page?: number
  pageSize?: number
  start?: number
}

export type GamesGraphQLResponse = {
  data: {
    games: {
      data: AtributesGames[]
    }
  }
  variables: Pagination
}

export type ResponseGames = {
  name: string
  slug: string
  price: number
  cover: {
    src: string
  }
  developers: Array<{ name: string }>
}
