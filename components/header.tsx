"use client"

import Link from 'next/link'
import { Button } from "../components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="w-full py-6 bg-background">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AI Search
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link href="#security" className="text-foreground hover:text-primary transition-colors">Security</Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

