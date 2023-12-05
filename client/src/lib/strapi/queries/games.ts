import { gamesFragment } from '../fragments/games'

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
