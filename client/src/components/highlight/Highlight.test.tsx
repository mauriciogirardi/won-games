import { screen } from '@testing-library/react'
import { Highlight } from './Highlight'
import { renderWithTheme } from '@/utils/tests/helpers'
import { Content } from './Highlight.styles'
import { initialProps } from './mocks'

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...initialProps} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead it's back/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Come see John's new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...initialProps} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${initialProps.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(
      <Highlight {...initialProps} floatImage="/float0image.png" />
    )

    expect(
      screen.getByRole('img', { name: initialProps.title })
    ).toHaveAttribute('src', '/float0image.png')
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...initialProps} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...initialProps} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${Content}`
    })
  })
})
