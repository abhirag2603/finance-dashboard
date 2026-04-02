"use client"

import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function RoleSwitcher() {
  const [role, setRole] = useState("viewer")

  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    if (savedRole) setRole(savedRole)
  }, [])

  const handleChange = (value: string) => {
    setRole(value)
    localStorage.setItem("role", value)
    window.location.reload() // simple approach
  }

  return (
    <Select value={role} onValueChange={handleChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="viewer">Viewer</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}