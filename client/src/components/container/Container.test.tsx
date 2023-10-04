import { Container } from './Container'
import { renderWithTheme } from '@/utils/tests/helpers'
import { themes } from '@/styles/themes'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      themes.grid.container
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
