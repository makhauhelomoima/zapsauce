import './globals.css'
import { Analytics } from '@vercel/analytics/react'
 
export const metadata = {
  title: 'Zap Sauce',
  description: 'Sweet + Savory Healing',
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  )
}