import { screen } from '@testing-library/react'
import { GamesTemplate } from './GamesTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockExploreSidebar } from '@/components/explore-sidebar/mock'
import { ReactNode } from 'react'
import { items } from '@/components/game-card-slider/mock'

jest.mock('@/templates/base-template/BaseTemplate', () => ({
  __esModule: true,
  BaseTemplate: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

jest.mock('@/components/explore-sidebar/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('@/components/game-card/GameCard', () => ({
  __esModule: true,
  GameCard: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<GamesTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <GamesTemplate filterItems={mockExploreSidebar} games={[items[0]]} />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
