import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sunga+ | Tableau de bord",
  description: "Plateforme de gestion des avances sur salaire",
  generator: "BATOUMENI Wildnis Shade Rich",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} antialiased h-full overflow-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}