import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'The best Game Stores in the world!',
  colorScheme: 'dark',
  icons: '/img/logo.png',
  keywords: 'Games, Actions'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
