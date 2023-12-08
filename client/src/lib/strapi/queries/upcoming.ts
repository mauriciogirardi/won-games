import { highlightFragment } from '../fragments/highlight'
import { gamesFragment } from '../fragments/game'

export const getUpcomingQuery = /* GraphQL */ `
  query queryUpcoming($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:asc"
      pagination: { limit: 9 }
    ) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...highlightFragment
            }
          }
        }
      }
    }
  }

  ${gamesFragment}
  ${highlightFragment}
`
