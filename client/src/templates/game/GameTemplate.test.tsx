import { screen } from '@testing-library/react'

import { GameTemplate, GameTemplateProps } from './GameTemplate'
import { renderWithTheme } from '@/utils/tests/helpers'

import { initialProps as highlight } from '@/components/highlight/mocks'
import { mockGameDetails } from '@/components/game-details/mock'
import { items as games } from '@/components/game-card-slider/mock'
import { mockGameInfo } from '@/components/game-info/mock/mockGameInfo'
import { mockGallery } from '@/components/gallery/mock'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: mockGameInfo,
  gallery: mockGallery,
  gameDetails: mockGameDetails,
  content: '<p>Content HTML</p>',
  recommended: {
    title: 'You may like these games',
    games,
    highlight
  },
  upcoming: {
    title: 'Upcoming Games',
    games,
    highlight
  }
}

jest.mock('@/components/gallery/Gallery', () => {
  return {
    __esModule: true,
    Gallery: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('@/components/game-details/GameDetails', () => {
  return {
    __esModule: true,
    GameDetails: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('@/components/game-info/GameInfo', () => {
  return {
    __esModule: true,
    GameInfo: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

jest.mock('@/components/showcase/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<GameTemplate />', () => {
  it('should render the template with component correctly', () => {
    renderWithTheme(<GameTemplate {...props} />)

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/content html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<GameTemplate {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<GameTemplate {...props} />)
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<GameTemplate {...props} />)
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should not render cover image', () => {
    renderWithTheme(<GameTemplate {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '50rem', {
      media: '(min-width:  768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
      {
        media: '(min-width:  768px)'
      }
    )
  })
})
