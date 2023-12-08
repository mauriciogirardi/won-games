import { HighlightProps } from '@/components/highlight/Highlight'
import { AttributesGames } from './game'
import { HighlightCommon } from './home'

export type Recommended = {
  title: string
  highlight: HighlightCommon | null
  games: {
    data: AttributesGames[]
  }
}

export type ResponseRecommended = {
  title: string
  games: Array<{
    title: string
    img: string
    price: string
    slug: string
    developer: string
  }>
  highlight: HighlightProps | null
}

export type RecommendedGraphQLResponse = {
  data: {
    recommended: {
      data: {
        attributes: {
          section: Recommended
        }
      }
    }
  }
}
