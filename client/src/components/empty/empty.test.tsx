import { screen } from '@testing-library/react'
import { Empty, EmptyProps } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props: EmptyProps = {
  description: 'lorem ipsum description',
  title: 'Empty title'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer on a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /empty title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
