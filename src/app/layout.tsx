import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mindbox ToDo',
  description: 'Тестовое задание Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}