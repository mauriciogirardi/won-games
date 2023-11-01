import { screen } from '@testing-library/react'
import { CardList } from './CardList'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockCardList } from './mock'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CardList items={mockCardList} total="$ 230.00" />)

    expect(screen.getByText('$ 230.00')).toBeInTheDocument()
    expect(screen.getByText('Total')).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })
})
