import { screen } from '@testing-library/react'
import { GameDetails } from './GameDetails'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockGameDetails } from './mock'

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)

    const headings = [
      'Developer',
      'Release Date',
      'Platforms',
      'Publisher',
      'Rating',
      'Genres'
    ]

    headings.forEach((heading) => {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    })
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    const platforms = ['Windows', 'Mac', 'Linux']
    platforms.forEach((platform) => {
      expect(screen.getByRole('img', { name: platform })).toBeInTheDocument()
    })
  })

  it('should render the formatted date.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    expect(screen.getByText('Nov 21, 2023')).toBeInTheDocument()
  })

  it('should render rating when BR0.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    expect(screen.getByText('FREE')).toBeInTheDocument()
  })

  it('should render rating when 18.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} rating="BR18" />)
    expect(screen.getByText('18')).toBeInTheDocument()
  })

  it('should render list of genres.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })

  it('should render publisher.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    expect(screen.getByText('Walkabout')).toBeInTheDocument()
  })

  it('should render developer.', () => {
    renderWithTheme(<GameDetails {...mockGameDetails} />)
    expect(screen.getByText('Different Tales')).toBeInTheDocument()
  })
})
