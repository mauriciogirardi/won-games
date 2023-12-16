import { ReactNode } from 'react'
import { screen } from '@testing-library/react'
import { GamesTemplate } from './games-template'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockExploreSidebar } from '@/components/explore-sidebar/mock/explore-sidebar'
import { mockCardSlider as games } from '@/components/game-card-slider/mock/game-card-slider'

jest.mock('@/templates/base/base-template', () => ({
  __esModule: true,
  BaseTemplate: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

jest.mock('@/components/explore-sidebar', () => ({
  __esModule: true,
  ExploreSidebar: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('@/components/game-card', () => ({
  __esModule: true,
  GameCard: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<GamesTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <GamesTemplate
        filterItems={mockExploreSidebar}
        games={games}
        page={1}
        pageSize={10}
        total={20}
      />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
