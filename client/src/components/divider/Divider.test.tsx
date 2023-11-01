import { Divider } from './Divider'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)
    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
