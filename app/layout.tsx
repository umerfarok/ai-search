"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "../components/theme-provider"
import Header from '../components/header'
import Footer from '../components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}