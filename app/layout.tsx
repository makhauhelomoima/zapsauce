import './globals.css'

export const metadata = {
  title: 'Zap Sauce - Sweet + Savory Healing',
  description: 'What hurts? We have a recipe for that.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
