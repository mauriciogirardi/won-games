import { bannerFragment } from '../fragments/banner'
import { highlightFragment } from '../fragments/highlight'
import { gamesFragment } from '../fragments/game'

export const getHomeQuery = /* GraphQL */ `
  query queryHome($date: Date!) {
    banners {
      data {
        attributes {
          ...bannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: $date } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...gamesFragment
        }
      }
    }

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

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...highlightFragment
            }
          }

          popularGames {
            title
            games(pagination: { limit: 8 }) {
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

          freeGames {
            title
            highlight {
              ...highlightFragment
            }
          }

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
  ${bannerFragment}
  ${highlightFragment}
`
