import { screen } from '@testing-library/react'
import { OrderList } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { ReactNode } from 'react'
import { mockOrderList } from './mock/order-list'

jest.mock('@/components/game-item', () => ({
  __esModule: true,
  GameItem: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

jest.mock('@/components/empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty"></div>
  }
}))

describe('<OrderList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrderList items={mockOrderList} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render the empty', () => {
    renderWithTheme(<OrderList />)

    expect(screen.queryAllByTestId('Mock GameItem')).not.toHaveLength(2)
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
