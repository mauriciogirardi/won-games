import { screen } from '@testing-library/react'
import { WishlistTemplate, WishlistTemplateProps } from './wishlist-template'
import { renderWithTheme } from '@/utils/tests/helpers'

import { mockHighlight as highlight } from '@/components/highlight/mocks/highlight'
import { mockCardSlider as games } from '@/components/game-card-slider/mock/game-card-slider'

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
    renderWithTheme(<WishlistTemplate {...initialProps} wishlist={games} />)

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
