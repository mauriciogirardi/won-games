import { screen, fireEvent, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Checkbox } from './Checkbox'
import { renderWithTheme } from '@/utils/tests/helpers'
import { themes } from '@/styles/themes'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render the input without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.queryByText(/checkbox label/i)).toHaveStyle({
      color: themes.colors.black
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="check" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenLastCalledWith(true)
  })

  it('should dispatch onCheck with default value', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="check" onCheck={onCheck} isChecked />)

    fireEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenLastCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
