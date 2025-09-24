import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "edutown",
  description: "trang web học tập",
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
