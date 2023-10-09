'use client'

import { PropsWithChildren } from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/globalStyles'
import { themes } from '@/styles/themes'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themes}>
      <StyleSheetManager
        shouldForwardProp={(prop) =>
          !['slideCount', 'currentSlide'].includes(prop)
        }
      >
        <GlobalStyles />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  )
}
