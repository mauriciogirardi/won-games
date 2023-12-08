import { recommendedFragment } from '../fragments/recommended'

export const getRecommendedQuery = /* GraphQL */ `
  query queryRecommended {
    recommended {
      data {
        attributes {
          ...recommendedFragment
        }
      }
    }
  }
  ${recommendedFragment}
`
