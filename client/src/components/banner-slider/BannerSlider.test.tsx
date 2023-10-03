import 'match-media-mock'
import { screen } from '@testing-library/react'
import { BannerSlider } from './BannerSlider'
import { renderWithTheme } from '@/utils/tests/helpers'
import { BannerProps } from '../banner/Banner'

const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now',
    ribbon: {
      name: '50% off',
      color: 'secondary'
    }
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
