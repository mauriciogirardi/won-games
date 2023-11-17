import 'match-media-mock'

import { screen } from '@testing-library/react'
import { HomeTemplate, HomeProps } from './HomeTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'
import { items as banners } from '@/components/banner-slider/mock/index'
import { items as gameCards } from '@/components/game-card-slider/mock/index'
import { initialProps as highlights } from '@/components/highlight/mocks'

const initialProps: HomeProps = {
  banners,
  newGames: gameCards,
  mostPopularHighlight: highlights,
  mostPopularGames: gameCards,
  upcomingGames: gameCards,
  upcomingHighlight: highlights,
  freeGames: gameCards,
  freeGamesHighlight: highlights
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
