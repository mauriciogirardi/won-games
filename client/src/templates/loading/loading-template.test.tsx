import { renderWithTheme } from '@/utils/tests/helpers'
import { LoadingTemplate } from './loading-template'
import { screen } from '@testing-library/react'

describe('LoadingTemplate', () => {
  it('should render loading', () => {
    const { container } = renderWithTheme(<LoadingTemplate />)

    expect(
      screen.getByRole('img', { name: /Video game control/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .c2 {
        border: 1rem solid #FAFAFA;
        border-top: 1rem solid #F231A5;
        border-radius: 50%;
        width: 18rem;
        height: 18rem;
        animation: spin 1s linear infinite;
      }

      .c1 {
        position: relative;
      }

      .c3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class="c2"
          />
          <img
            alt="Video game control"
            class="c3"
            src="/img/logo.png"
          />
        </div>
      </div>
    `)
  })
})
