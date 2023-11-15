import { screen } from '@testing-library/react'
import { CardsList } from './CardsList'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockPaymentOptions } from '../payment-options/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={mockPaymentOptions} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.svg'
    )

    expect(screen.getByText(/5689/)).toBeInTheDocument()
    expect(screen.getByText(/4789/)).toBeInTheDocument()
  })
})
