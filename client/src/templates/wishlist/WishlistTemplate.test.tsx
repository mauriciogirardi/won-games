import { screen } from '@testing-library/react'
import { WishlistTemplate, WishlistTemplateProps } from './WishlistTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'

import { initialProps as highlight } from '@/components/highlight/mocks'
import { items as games, items } from '@/components/game-card-slider/mock'

const initialProps: WishlistTemplateProps = {
  recommended: {
    title: 'You may like these games',
    games,
    highlight
  }
}

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
    renderWithTheme(<WishlistTemplate {...initialProps} wishlist={items} />)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Rackstar Games/i)).toHaveLength(6)
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(<WishlistTemplate {...initialProps} wishlist={[]} />)
    expect(screen.queryByText(/Rackstar Games/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
