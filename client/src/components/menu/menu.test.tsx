import { fireEvent, screen } from '@testing-library/react'
import { Menu } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    const iconMenu = screen.getByLabelText(/open menu/i)
    const iconSearch = screen.getByLabelText(/search/i)
    const logo = screen.getByLabelText(/Won Games/i)

    expect(logo).toBeInTheDocument()
    expect(iconMenu).toBeInTheDocument()
    expect(iconSearch).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    const menu = screen.getByLabelText(/open menu/i)
    const closeButton = screen.getByLabelText(/close menu/i)

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(menu)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(closeButton)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/login in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should show all links when logged in', () => {
    renderWithTheme(<Menu username="John Doe" />)

    expect(screen.queryByText(/login in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()

    expect(screen.getByTestId('my account')).toBeInTheDocument()
    expect(screen.getByTestId('wishlist')).toBeInTheDocument()
  })
})
