import 'match-media-mock'

import { fireEvent, screen } from '@testing-library/react'
import { Gallery } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { mockGallery } from './mock/mock-gallery'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery image 1/i })
    ).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fgames%2Fcyberpunk-1.jpg&w=640&q=100'
    )
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const open = screen.getByRole('button', {
      name: /Thumb - Gallery image 1/i
    })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(open)
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button clucked', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const open = screen.getByRole('button', {
      name: /Thumb - Gallery image 1/i
    })

    fireEvent.click(open)

    const close = screen.getByRole('button', {
      name: /close modal/i
    })

    fireEvent.click(close)
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockGallery.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')
    const open = screen.getByRole('button', {
      name: /Thumb - Gallery image 1/i
    })

    fireEvent.click(open)

    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    const open = screen.getByRole('button', {
      name: /Thumb - Gallery image 2/i
    })

    fireEvent.click(open)

    const img = await screen.findByRole('img', { name: /Gallery image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
