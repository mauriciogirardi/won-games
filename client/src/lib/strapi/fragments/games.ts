export const gamesFragment = /* GraphQL */ `
  fragment gamesFragment on Game {
    name
    slug
    price
    cover {
      data {
        attributes {
          src: url
        }
      }
    }
    developers {
      data {
        attributes {
          name
        }
      }
    }
  }
`
