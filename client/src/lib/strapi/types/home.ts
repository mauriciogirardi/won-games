export type AttributesBanner = {
  attributes: {
    title: string
    subtitle: string
    image: {
      data: {
        attributes: {
          url: string
          alt: string
        }
      }
    }

    button: {
      label: string
      link: string
    }
    ribbon: {
      text: string
      color: 'primary' | 'secondary'
      size: 'normal' | 'size'
    } | null
  }
}

export type AttributesCommon = {
  attributes: {
    name: string
    slug: string
    price: number
    cover: {
      data: {
        attributes: {
          src: string
        }
      }
    }
    developers: {
      data: [
        {
          attributes: {
            name: string
          }
        }
      ]
    }
  }
}

export type HighlightCommon = {
  title: string
  subtitle: string
  buttonLink: string
  buttonLabel: string
  alignment: 'left' | 'right'
  background: {
    data: {
      attributes: {
        src: string
      }
    }
  }
  floatImage: {
    data: {
      attributes: {
        src: string
      }
    }
  }
}

export type AttributesNewGame = AttributesCommon
export type AttributesUpcomingGame = AttributesCommon
export type AttributesFreeGame = AttributesCommon
export type AttributesSections = {
  newGames: {
    title: string
    highlight: HighlightCommon | null
  }
  popularGames: {
    title: string
    highlight: HighlightCommon | null
    games: {
      data: AttributesCommon[]
    }
  }
  freeGames: {
    title: string
    highlight: HighlightCommon | null
  }
  upcomingGames: {
    title: string
    highlight: HighlightCommon | null
  }
}

export type HomeGraphQLResponse = {
  data: {
    banners: {
      data: AttributesBanner[]
    }
    newGames: {
      data: AttributesNewGame[]
    }
    upcomingGames: {
      data: AttributesUpcomingGame[]
    }
    freeGames: {
      data: AttributesFreeGame[]
    }
    sections: {
      data: {
        attributes: AttributesSections
      }
    }
  }
  variables: {
    date: string
  }
}
