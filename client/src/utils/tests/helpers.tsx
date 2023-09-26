import { ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'
import { themes } from '@/styles/themes'
import { ReactNode } from 'react'

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={themes}>{children}</ThemeProvider>)
}
