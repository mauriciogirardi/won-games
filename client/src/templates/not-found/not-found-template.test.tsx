import { renderWithTheme } from '@/utils/tests/helpers'
import NotFoundTemplate from './not-found-template'
import { screen } from '@testing-library/react'
import { ReactNode } from 'react'

jest.mock('@/components/empty', () => {
  return {
    __esModule: true,
    Empty: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

jest.mock('../base/base-template', () => ({
  __esModule: true,
  BaseTemplate: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock BaseTemplate">{children}</div>
  }
}))

describe('NotFoundTemplate', () => {
  it('should render NotFound Page', () => {
    renderWithTheme(<NotFoundTemplate />)
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BaseTemplate')).toBeInTheDocument()
  })
})
