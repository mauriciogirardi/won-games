import { screen } from '@testing-library/react'
import { GamesTemplate } from './games-template'
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
  it('should render the heading', async () => {
    renderWithTheme(
      <GamesTemplate
        filterItems={mockExploreSidebar}
        games={items}
        page={1}
        pageSize={10}
        total={20}
      />
    )

    await expect(screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    await expect(screen.findByTestId('Mock BaseTemplate')).toBeInTheDocument()
    await expect(screen.findByTestId('Mock GameCard')).toBeInTheDocument()
    await expect(
      screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
