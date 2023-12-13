import { screen } from '@testing-library/react'
import { Pagination } from './pagination'
import { renderWithTheme } from '@/utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { themes } from '@/styles/themes'

describe('<Pagination />', () => {
  it('should render pagination', () => {
    renderWithTheme(<Pagination page={1} pageSize={10} total={20} />)

    expect(screen.getByRole('link', { name: '1' })).toHaveAttribute(
      'href',
      '?page=1&pageSize=10'
    )
    expect(screen.getByRole('link', { name: '2' })).toHaveAttribute(
      'href',
      '?page=2&pageSize=10'
    )
  })

  it('should page one must be active', () => {
    renderWithTheme(<Pagination page={1} pageSize={10} total={7} />)

    expect(screen.getByRole('link', { name: '1' })).toHaveStyle({
      'background-color': `${themes.colors.primary};`
    })
  })

  it('should change page', async () => {
    renderWithTheme(<Pagination page={1} pageSize={10} total={70} />)

    const pageFour = screen.getByRole('link', { name: '3' })

    await userEvent.click(pageFour)

    expect(screen.getByRole('link', { name: '3' })).toHaveStyle({
      'background-color': `${themes.colors.primary};`
    })
  })

  it('should render two ellipsis', () => {
    renderWithTheme(<Pagination page={5} pageSize={10} total={100} />)
    const ellipsis = screen.getAllByText('...')

    expect(ellipsis).toHaveLength(2)
  })
})
