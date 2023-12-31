import 'match-media-mock'

import { ReactNode } from 'react'
import { screen } from '@testing-library/react'
import { ProfileTemplate } from './profile-template'
import { renderWithTheme } from '@/utils/tests/helpers'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/profile/me')
}))

jest.mock('../base/base-template', () => ({
  __esModule: true,
  BaseTemplate: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

jest.mock('@/components/heading', () => ({
  __esModule: true,
  Heading: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))

jest.mock('@/components/profile-menu', () => ({
  __esModule: true,
  ProfileMenu: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<ProfileTemplate />', () => {
  it('should render the sections', () => {
    renderWithTheme(<ProfileTemplate>Profile Template</ProfileTemplate>)

    expect(screen.getByText('Profile Template')).toBeInTheDocument()
    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
