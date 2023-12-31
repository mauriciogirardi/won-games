import { screen } from '@testing-library/react'
import { CardList } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockCardList } from './mock/mock-card-list'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CardList items={mockCardList} total="$ 230.00" />)

    expect(screen.getByText('$ 230.00')).toBeInTheDocument()
    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })

  it('should render the button', () => {
    renderWithTheme(
      <CardList items={mockCardList} total="$ 230.00" hasButton />
    )

    expect(screen.getByText(/by it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CardList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
