import { screen } from '@testing-library/react'
import { TextContent } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockTextContent } from './mock/text-content'
import { themes } from '@/styles/themes'

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(
      <TextContent {...mockTextContent} content={'<h1>Content</h1>'} />
    )

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render  without title', () => {
    renderWithTheme(<TextContent content={'<h1>Content</h1>'} />)

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render color white and black', () => {
    renderWithTheme(<TextContent {...mockTextContent} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: themes.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', themes.colors.black, {
      media: '(min-width:  768px)'
    })
  })
})
