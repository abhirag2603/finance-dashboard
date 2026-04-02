"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { exportToCSV, exportToJSON } from "@/lib/exportUtils"

export function ExportButton({ data }: { data: any[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hover:scale-[1.02] active:scale-[0.98]" variant="outline">Export</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => exportToCSV(data)}>
          Export as CSV
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => exportToJSON(data)}>
          Export as JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}