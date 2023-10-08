import React from 'react'
import { GlobalStyles } from '../src/styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { themes } from '../src/styles/themes'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: themes.colors.white
      },
      {
        name: 'won-dark',
        value: themes.colors.mainBg
      }
    ]
  }
}
