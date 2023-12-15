import 'match-media-mock'

import { screen } from '@testing-library/react'
import { HomeTemplate, HomeProps } from './home-template'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockBannerSlicer as banners } from '@/components/banner-slider/mock/banner-slicer'
import { mockCardSlider as games } from '@/components/game-card-slider/mock/game-card-slider'
import { mockHighlight as highlights } from '@/components/highlight/mocks/highlight'

const initialHighlights = {
  title: 'Title',
  highlight: highlights
}

const initialProps: HomeProps = {
  banners,
  newGames: games,
  mostPopularHighlight: initialHighlights,
  mostPopularGames: games,
  upcomingGames: games,
  upcomingHighlight: initialHighlights,
  freeGames: games,
  freeGamesHighlight: initialHighlights,
  newGamesHighlight: initialHighlights
}

jest.mock('@/components/showcase/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

describe('<HomeTemplate />', () => {
  it('should render all showcase', () => {
    renderWithTheme(<HomeTemplate {...initialProps} />)
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(4)
  })
})
