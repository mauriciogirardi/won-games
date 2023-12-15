import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests/helpers'
import { themes } from '@/styles/themes'
import { Radio } from '.'

describe('<Radio />', () => {
  it('should render the label white', () => {
    renderWithTheme(<Radio label="radio" labelFor="radio" value="anyValue" />)

    const label = screen.getByText('radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: themes.colors.white })
  })

  it('should render with label black', () => {
    renderWithTheme(
      <Radio
        label="radio"
        labelFor="radio"
        value="anyValue"
        labelColor="black"
      />
    )

    const label = screen.getByText('radio')
    expect(label).toHaveStyle({ color: themes.colors.black })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="radio"
        labelFor="radio"
        value="anyValue"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText('radio'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Radio label="radio" labelFor="radio" />)
    const radio = screen.getByLabelText(/radio/i)

    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(radio).toHaveFocus()
  })
})
