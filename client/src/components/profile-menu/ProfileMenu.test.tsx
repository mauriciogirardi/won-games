import { screen } from '@testing-library/react'
import { ProfileMenu } from './ProfileMenu'
import { renderWithTheme } from '@/utils/tests/helpers'
import { themes } from '@/styles/themes'
import { PATH_PROFILE_CARDS } from '@/constants/paths'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink={PATH_PROFILE_CARDS} />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: themes.colors.primary,
      color: themes.colors.white
    })
  })
})
