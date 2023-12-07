export const gameFragment = /* GraphQL */ `
  fragment gameFragment on Game {
    name
    shortDescription: short_description
    description
    price
    rating
    releaseDate: release_date
    gallery {
      data {
        attributes {
          src: url
          label: alternativeText
        }
      }
    }
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
    publisher {
      data {
        attributes {
          name
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
    platforms {
      data {
        attributes {
          name
        }
      }
    }
  }
`

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
