import { screen } from '@testing-library/react'
import { Button } from './Button'
import { renderWithTheme } from '@/utils/tests/helpers'
import { ShoppingCart } from 'lucide-react'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      padding: '0.8rem 4.0rem',
      height: '5rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />}>Buy now</Button>
    )
    const buttonText = screen.getByText(/Buy now/i)
    const icon = screen.getByTestId('icon')

    expect(buttonText).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: 'rgb(178, 11, 111)'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })
})
