import { screen } from '@testing-library/react'
import { AuthTemplate } from './auth-template'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<AuthTemplate />', () => {
  it('should render the logo, title , children', () => {
    renderWithTheme(
      <AuthTemplate title="Sign In">
        <p>children</p>
      </AuthTemplate>
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
