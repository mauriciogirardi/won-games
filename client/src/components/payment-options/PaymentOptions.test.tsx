import { screen, waitFor } from '@testing-library/react'
import { PaymentOptions } from './PaymentOptions'
import { renderWithTheme } from '@/utils/tests/helpers'
import { cardsMock } from './mock'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={cardsMock} />
    )

    expect(screen.getByLabelText(/5689/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4789/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking in the label', async () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={cardsMock} />
    )

    const card = screen.getByLabelText(/5689/)
    userEvent.click(card)

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /5689/ })).toBeChecked()
    })
  })

  it('should handle select card when clicking in the label', async () => {
    renderWithTheme(
      <PaymentOptions handlePayment={jest.fn} cards={cardsMock} />
    )

    const card = screen.getByLabelText(/5689/)
    userEvent.click(card)

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /5689/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions handlePayment={handlePayment} cards={cardsMock} />
    )

    const buyNow = screen.getByRole('button', { name: /buy now/i })
    userEvent.click(buyNow)

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when button is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions handlePayment={handlePayment} cards={cardsMock} />
    )

    const card = screen.getByLabelText(/5689/)
    userEvent.click(card)

    const buyNow = screen.getByRole('button', { name: /buy now/i })
    userEvent.click(buyNow)

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
