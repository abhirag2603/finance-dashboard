"use client"

import { useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTransactionStore } from "@/store/useTransactionStore"

export function RoleSwitcher() {
  const { role, setRole } = useTransactionStore()

  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    if (savedRole) setRole(savedRole)
  }, [])

  return (
    <Select value={role} onValueChange={setRole}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="viewer">Viewer</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}