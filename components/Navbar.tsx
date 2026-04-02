"use client"

import { ThemeToggle } from "./theme-toggle"
import { RoleSwitcher } from "./role-switcher"

export function Navbar() {
  return (
    <div className="w-full border-b px-6 py-3 flex items-center justify-between">
      <h1 className="text-xl font-heading font-bold">
        Finance Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <RoleSwitcher />
        <ThemeToggle />
      </div>
    </div>
  )
}