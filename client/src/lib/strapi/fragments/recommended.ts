import { gamesFragment } from './game'
import { highlightFragment } from './highlight'

export const recommendedFragment = /* GraphQL */ `
  fragment recommendedFragment on Recommended {
    section {
      title
      games {
        data {
          attributes {
            ...gamesFragment
          }
        }
      }
      highlight {
        ...highlightFragment
      }
    }
  }

  ${highlightFragment}
  ${gamesFragment}
`
