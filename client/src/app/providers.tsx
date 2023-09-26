'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/globalStyles'
import { themes } from '@/styles/themes'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
