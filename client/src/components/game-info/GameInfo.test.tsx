import { screen } from '@testing-library/react'
import { GameInfo, GameInfoProps } from './GameInfo'
import { renderWithTheme } from '@/utils/tests/helpers'

const initialProps: GameInfoProps = {
  description: 'description',
  price: '250.00',
  title: 'Title'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    renderWithTheme(<GameInfo {...initialProps} />)

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()

    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByText('250.00')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...initialProps} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
