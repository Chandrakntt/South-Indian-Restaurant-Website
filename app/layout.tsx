import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'South Indian Restaurant',
  description: 'Experience authentic South Indian cuisine',
  keywords: 'South Indian, Restaurant, Dosa, Idli, Food',
  authors: [{ name: 'Restaurant Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'South Indian Restaurant',
    description: 'Experience authentic South Indian cuisine',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
