import { gameFragment } from '../fragments/game'

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
