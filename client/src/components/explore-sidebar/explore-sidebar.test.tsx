import { screen, fireEvent } from '@testing-library/react'
import { ExploreSidebar } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockExploreSidebar } from './mock/explore-sidebar'
import { css } from 'styled-components'
import { Overlay } from './explore-sidebar.styles'
import userEvent from '@testing-library/user-event'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        sidebars={mockExploreSidebar}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        sidebars={mockExploreSidebar}
        initialValues={{
          sort_by: 'low-to-high',
          platforms: ['windows', 'linux']
        }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={onFilter} />
    )

    fireEvent.click(screen.getByLabelText(/windows/i))
    fireEvent.click(screen.getByLabelText(/linux/i))
    fireEvent.click(screen.getByLabelText(/low to high/i))

    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should alter between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={onFilter} />
    )

    fireEvent.click(screen.getByLabelText(/low to high/i))
    fireEvent.click(screen.getByLabelText(/high to low/i))

    expect(onFilter).toHaveBeenCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile', async () => {
    const { container } = renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    // INITIAL STATUS
    expect(container.firstChild).not.toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
      modifier: String(css`
        ${Overlay}
      `)
    })

    // OPEN FILTER
    await userEvent.click(screen.getByLabelText(/open filters/))
    expect(container.firstChild).not.toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
      modifier: String(css`
        ${Overlay}
      `)
    })

    // CLOSE FILTER
    await userEvent.click(screen.getByLabelText(/close filters/))
    expect(Element).not.toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
      modifier: String(css`
        ${Overlay}
      `)
    })

    // OPEN/CLOSE FILTER BUTTON
    await userEvent.click(screen.getByLabelText(/open filters/))
    await userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(Element).not.toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
      modifier: String(css`
        ${Overlay}
      `)
    })
  })
})
