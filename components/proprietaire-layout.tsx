"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Tableau de bord", href: "/proprietaire", icon: LayoutDashboard },
  { name: "Mes salaries", href: "/proprietaire/salaries", icon: Users },
  { name: "Avances sur salaire", href: "/proprietaire/avances", icon: CreditCard }
]

export function ProprietaireLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme === "dark") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleLogout = () => {
    router.push("/connexion")
  }

  return (
    <div className="flex h-screen w-full bg-secondary overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col",
          "bg-white border-r-4 border-[#001B52] dark:bg-[#001B52]",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-[#001B52]/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <img
              src="/images/icon_light.jpeg"
              alt="Sunga+"
              className="dark:hidden w-auto"
            />
            <img
              src="/images/icon_dark.jpeg"
              alt="Sunga+"
              className="hidden dark:block w-auto"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#001B52] dark:text-white hover:bg-[#001B52]/10 dark:hover:bg-white/10"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-[#001B52] text-white dark:bg-[#00A67F]"
                    : "text-[#001B52] dark:text-white hover:bg-[#001B52]/10 dark:hover:bg-white/10",
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-[#001B52]/10 dark:border-white/10 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-[#001B52] dark:text-white hover:bg-[#001B52] dark:hover:bg-white/10"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon className="h-5 w-5 mr-3" /> : <Sun className="h-5 w-5 mr-3" />}
            {"Theme"}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-[#001B52] dark:text-white hover:bg-[#001B52] hover:text-white dark:hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Se deconnecter
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-secondary"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5 text-primary" />
              </Button>
              <h1 className="text-base font-normal text-primary">Espace Proprietaire</h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-primary hidden sm:block">TechCorp Solutions</span>

              {/* User Avatar */}
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-white">
          <div className="max-w-full mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}