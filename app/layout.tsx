import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZAP SAUCE ⚡ | Immunity in a Jar | Lesotho',
  description: '1 tsp daily keeps pharmacy away. Product of Lesotho by Makhauhelo Moima. Mpesa-only recipe PDFs M120-M647. No PayPal. Just results.',
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
