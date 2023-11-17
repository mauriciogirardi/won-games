import { screen } from '@testing-library/react'
import { WishlistTemplate } from './WishlistTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'

jest.mock('@/components/showcase/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<WishlistTemplate />', () => {
  it('should render correctly', () => {
    renderWithTheme(<WishlistTemplate />)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Rackstar Games/i)).toHaveLength(6)
  })

  // it('should render empty when there are no games', () => {
  //   renderWithTheme(<WishlistTemplate />)
  //   expect(screen.queryAllByText(/Rackstar Games/i)).not.toBeInTheDocument()
  //   expect(
  //     screen.getByRole('heading', { name: /your wishlist is empty/i })
  //   ).toBeInTheDocument()
  // })
})
