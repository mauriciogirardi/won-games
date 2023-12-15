import { fireEvent, screen } from '@testing-library/react'
import { GameCard } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'Read Dead Redemption',
  developer: 'Rackstar Games',
  price: '215,00',
  img: '/red-dead-img.png',
  slug: 'read_dead_redemption'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead Redemption/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Rackstar Games/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/215,00/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Read Dead Redemption/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Rackstar Games/i })
    ).toHaveAttribute('href', `/game/${props.slug}`)
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const label = screen.getByText(/215,00/i)

    expect(label).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(label).not.toHaveStyle({
      textDecoration: 'line-through',
      color: '#BBBBBB'
    })
  })

  it('should render a line-through in prive when promotion', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="150,00" />)

    const label = screen.getByText(/215,00/i)
    const promotional = screen.getByText(/215,00/i)

    expect(label).toBeInTheDocument()
    expect(promotional).toHaveStyle({
      textDecoration: 'line-through',
      color: '#BBBBBB'
    })
  })

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon={{
          name: '50 off',
          color: 'primary',
          size: 'normal'
        }}
      />
    )

    expect(screen.getByText(/50 off/i)).toBeInTheDocument()
    expect(screen.getByText(/50 off/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite when favorite is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFavorite={onFavorite} />)

    const favorite = screen.getAllByRole('button')[0]
    fireEvent.click(favorite)

    expect(onFavorite).toBeCalled()
  })
})
