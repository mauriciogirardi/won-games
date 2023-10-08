import { screen } from '@testing-library/react'
import { Home } from './Home'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Home />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Home />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should render the footer', () => {
    renderWithTheme(<Home />)
    expect(screen.getByRole('heading', { name: /contact us/i }))
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)
    expect(screen.getByRole('heading', { name: /news/i }))
    expect(screen.getByRole('heading', { name: /most popular/i }))
    expect(screen.getByRole('heading', { name: /upcoming/i }))
    expect(screen.getByRole('heading', { name: /free games/i }))
  })
})
