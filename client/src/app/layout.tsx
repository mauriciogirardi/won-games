import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Won Games',
    template: 'Won Games | %s'
  },
  description: 'The best Game Stores in the world!',
  icons: '/img/logo.png',
  keywords: ['Games, Actions'],
  robots: {
    follow: true,
    index: true
  }
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
          <Providers>
            <Suspense>{children}</Suspense>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
