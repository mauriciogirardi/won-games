import { screen } from '@testing-library/react'
import { Pagination } from './pagination'
import { renderWithTheme } from '@/utils/tests/helpers'

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
})
