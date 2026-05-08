import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zap Sauce ⚡ | Lightning in a jar! | Lesotho',
  description: 'ORIGIN for immunity M250. FIREBALL for braai M350. Pick your lightning from Lesotho.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}