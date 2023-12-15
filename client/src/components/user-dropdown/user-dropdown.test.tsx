import { screen } from '@testing-library/react'
import { UserDropdown } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import userEvent from '@testing-library/user-event'

describe('<UserDropdown />', () => {
  it('should render the user', () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="John Doe" />)

    await userEvent.click(screen.getByText('John Doe'))

    expect(
      screen.getByRole('link', { name: /my account/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
