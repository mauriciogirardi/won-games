import 'match-media-mock'
import { screen } from '@testing-library/react'
import { GameCardSlider } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockCardSlider } from './mock/game-card-slider'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={mockCardSlider} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={mockCardSlider} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
