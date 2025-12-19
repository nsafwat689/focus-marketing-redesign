import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Focus For Marketing',
  description: 'Professional BPO and Marketing Services',
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
