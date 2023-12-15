import { HighlightProps } from '@/components/highlight'
import { AttributesGames } from './game'
import { HighlightCommon } from './home'

export type ResponseUpcoming = {
  title?: string
  games: Array<{
    title: string
    img: string
    price: string
    slug: string
    developer: string
  }>
  highlight: HighlightProps | null
}

export type Upcoming = {
  upcomingGames: {
    data: AttributesGames[]
  }
  showcase: {
    data: {
      attributes: {
        upcomingGames: {
          title: string
          highlight: HighlightCommon | null
        }
      }
    }
  }
}

export type UpcomingGraphQLResponse = {
  data: Upcoming
  variables: {
    date: string
  }
}
