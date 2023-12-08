import { screen } from '@testing-library/react'
import { CartTemplate, CartTemplateProps } from './CartTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'
import { initialProps as highlight } from '@/components/highlight/mocks'
import { items as games } from '@/components/game-card-slider/mock'

const initialProps: CartTemplateProps = {
  recommended: {
    title: 'You may like these games',
    games,
    highlight
  }
}

jest.mock('@/components/showcase/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('@/components/card-list/CardList', () => {
  return {
    __esModule: true,
    CardList: function Mock() {
      return <div data-testid="Mock CardList"></div>
    }
  }
})

jest.mock('@/components/payment-options/PaymentOptions', () => {
  return {
    __esModule: true,
    PaymentOptions: function Mock() {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
})

jest.mock('@/components/empty/Empty', () => {
  return {
    __esModule: true,
    Empty: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<CartTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartTemplate {...initialProps} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
  })

  // it('should render empty when there are no items', () => {
  //   renderWithTheme(<CartTemplate {...initialProps}/>)
  //   expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  // })
})
