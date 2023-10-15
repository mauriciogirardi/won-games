import { screen } from '@testing-library/react'
import { FormSignUp } from './FormSignUp'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the sign up link and text', () => {
    renderWithTheme(<FormSignUp />)
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
