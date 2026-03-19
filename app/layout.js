import './globals.css'

export const metadata = {
  title: 'NexusAI - AI-Powered Freelance Services',
  description: 'Professional AI-driven development, design, and marketing services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
