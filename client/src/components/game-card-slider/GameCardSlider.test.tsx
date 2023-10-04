import 'match-media-mock'
import { screen } from '@testing-library/react'
import { GameCardSlider } from './GameCardSlider'
import { renderWithTheme } from '@/utils/tests/helpers'
import { GameCardProps } from '../game-card/GameCard'

const items: GameCardProps[] = [
  {
    img: '/img',
    title: 'Defy death 1',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: '/img',
    title: 'Defy death 4',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: '/img',
    title: 'Defy death 3',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: '/img',
    title: 'Defy death 2',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: '/img',
    title: 'Defy death 5',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: '/img',
    title: 'Defy death 8',
    price: '$215.00',
    developer: 'Rackstar Games'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
