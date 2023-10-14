import { screen } from '@testing-library/react'
import { Auth } from './Auth'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Auth />', () => {
  it('should render the logo, title , children', () => {
    renderWithTheme(
      <Auth title="Sign In">
        <p>children</p>
      </Auth>
    )

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()

    expect(screen.getByText('children')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /WON is the best an most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })
})
