import { screen } from '@testing-library/react'
import { Heading } from './Heading'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
