import 'match-media-mock'
import { screen } from '@testing-library/react'
import { Slider, SliderSettings } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const settings: SliderSettings = {
  slidesToShow: 1,
  infinite: false
}

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = renderWithTheme(
      <Slider settings={settings}>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
