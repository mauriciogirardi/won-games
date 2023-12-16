import { screen } from '@testing-library/react'
import { BaseTemplate } from './base-template'
import { renderWithTheme } from '@/utils/tests/helpers'

jest.mock('@/components/menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="mock menu"></div>
    }
  }
})

jest.mock('@/components/footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="mock footer"></div>
    }
  }
})

describe('<BaseTemplate />', () => {
  it('should render the menu', () => {
    renderWithTheme(
      <BaseTemplate>
        <h1>children</h1>
      </BaseTemplate>
    )
    expect(screen.getByTestId('mock menu')).toBeInTheDocument()
  })

  it('should render the footer', () => {
    renderWithTheme(
      <BaseTemplate>
        <h1>children</h1>
      </BaseTemplate>
    )
    expect(screen.getByTestId('mock footer')).toBeInTheDocument()
  })
})
