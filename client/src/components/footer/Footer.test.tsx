import { screen } from '@testing-library/react'
import { Footer } from './Footer'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />)

    const column1 = screen.getByRole('heading', { name: /contact/i })
    const column2 = screen.getByRole('heading', { name: /follow us/i })
    const column3 = screen.getByRole('heading', { name: /links/i })
    const column4 = screen.getByRole('heading', { name: /location/i })

    expect(column1).toBeInTheDocument()
    expect(column2).toBeInTheDocument()
    expect(column3).toBeInTheDocument()
    expect(column4).toBeInTheDocument()
  })
})
