import 'match-media-mock'

import { screen } from '@testing-library/react'
import { Home } from './Home'
import { renderWithTheme } from '@/utils/tests/helpers'
import { items as banners } from '@/components/banner-slider/mock/index'
import { items as gameCards } from '@/components/game-card-slider/mock/index'
import { initialProps as highlights } from '@/components/highlight/mocks'

const initialProps = {
  banners,
  newGames: gameCards,
  mostPopularHighlight: highlights,
  mostPopularGames: gameCards,
  upcomingGames: gameCards,
  upcomingHighlight: highlights,
  upcomingMoreGames: gameCards,
  freeGames: gameCards,
  freeGamesHighlight: highlights
}

describe('<Home />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Home {...initialProps} />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should render the footer', () => {
    renderWithTheme(<Home {...initialProps} />)
    expect(screen.getByRole('heading', { name: /contact us/i }))
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...initialProps} />)
    expect(screen.getByRole('heading', { name: /news/i }))
    expect(screen.getByRole('heading', { name: /most popular/i }))
    expect(screen.getByRole('heading', { name: /upcoming/i }))
    expect(screen.getByRole('heading', { name: /free games/i }))
  })
})
