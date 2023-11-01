import { Grid } from './Grid'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Lorem Ipsum</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        grid-gap: 3.2rem;
        margin: 3.2rem 0;
      }

      <div
        class="c0"
      >
        Lorem Ipsum
      </div>
    `)
  })
})
