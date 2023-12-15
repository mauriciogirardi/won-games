import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'
import { BannerSlider } from '.'
import { mockBannerSlicer } from './mock/banner-slicer'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={mockBannerSlicer} />
    )

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={mockBannerSlicer} />
    )

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={mockBannerSlicer} />
    )

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
