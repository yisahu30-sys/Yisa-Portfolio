import './globals.css'

export const metadata = {
  title: 'Yisa Hu Portfolio',
  description: 'English Teacher Portfolio',
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
