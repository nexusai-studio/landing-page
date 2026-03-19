import './globals.css'

export const metadata = {
  title: 'NX Studio - Expert Development & Design',
  description: 'Professional web development, UI/UX design, and marketing services. Fast delivery, quality results.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
