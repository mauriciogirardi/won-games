import { screen } from '@testing-library/react'
import { CartDropdown } from './CartDropdown'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockCardList } from '../card-list/mock'

describe('<CartDropdown />', () => {
  it('should CardIcon and its badge', () => {
    renderWithTheme(<CartDropdown items={mockCardList} total="$250.00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockCardList.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={mockCardList} total="$50.00" />)

    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText(/Red Dead Redemption 2/i)).toBeInTheDocument()
  })
})
