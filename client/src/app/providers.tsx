'use client'

import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { PropsWithChildren } from 'react'

import { GlobalStyles } from '@/styles/global-styles'
import { themes } from '@/styles/themes'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themes}>
      <StyleSheetManager>
        <GlobalStyles />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  )
}
