import 'match-media-mock'

import { screen } from '@testing-library/react'
import { Showcase } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockCardSlider } from '../game-card-slider/mock/game-card-slider'
import { mockHighlight } from '../highlight/mocks/highlight'

describe('<Showcase />', () => {
  it('should render full Showcase', () => {
    const { container } = renderWithTheme(
      <Showcase
        title="My title"
        games={mockCardSlider}
        highlight={mockHighlight}
      />
    )

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render only the title', () => {
    const { container } = renderWithTheme(<Showcase title="My title" />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /buy now/i })
    ).not.toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).not.toHaveLength(4)
  })

  it('should render only the games', () => {
    const { container } = renderWithTheme(<Showcase games={mockCardSlider} />)

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /buy now/i })
    ).not.toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render only the highlight', () => {
    const { container } = renderWithTheme(
      <Showcase title="" games={[]} highlight={mockHighlight} />
    )

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).not.toHaveLength(4)
  })
})
