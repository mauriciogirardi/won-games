import { screen, fireEvent } from '@testing-library/react'
import { ExploreSidebar } from './ExploreSidebar'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockExploreSidebar } from './mock'
import { css } from 'styled-components'
import { Overlay } from './ExploreSidebar.styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
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
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
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
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={onFilter} />
    )

    fireEvent.click(screen.getByLabelText(/windows/i))
    fireEvent.click(screen.getByLabelText(/low to high/i))
    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should alter between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={onFilter} />
    )

    fireEvent.click(screen.getByLabelText(/low to high/i))
    fireEvent.click(screen.getByLabelText(/high to low/i))
    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar sidebars={mockExploreSidebar} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:  768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
