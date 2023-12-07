import { gameFragment, gamesFragment } from '../fragments/game'

export const getGameQuery = /* GraphQL */ `
  query queryGame($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...gameFragment
        }
      }
    }
  }
  ${gameFragment}
`

export const getGamesQuery = /* GraphQL */ `
  query queryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }
  }
  ${gamesFragment}
`

export const getNewGamesQuery = /* GraphQL */ `
  query queryNewGames {
    newGames: games(
      filters: { release_date: { lte: "2023-12-06" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }
  }
  ${gamesFragment}
`

export const getFreeGamesQuery = /* GraphQL */ `
  query queryFreeGames {
    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 9 }
    ) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }
  }
  ${gamesFragment}
`

export const getUpcomingGamesQuery = /* GraphQL */ `
  query queryUpcomingGames {
    upcomingGames: games(
      filters: { release_date: { gt: "2023-12-06" } }
      sort: "release_date:asc"
      pagination: { limit: 9 }
    ) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }
  }
  ${gamesFragment}
`
