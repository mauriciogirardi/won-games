import { screen } from '@testing-library/react'
import { Banner } from './Banner'
import { renderWithTheme } from '@/utils/tests/helpers'

const bannerProps = {
  img: 'https://source.unsplash.com/user/mauriciogirardi/1042x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLink: '/games/defy-death',
  buttonLabel: 'Buy now'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    )
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
