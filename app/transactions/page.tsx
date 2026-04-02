"use client"

import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { TransactionsTable } from "@/components/dashboard/TransactionsTable"
import { ExportButton } from "@/components/dashboard/ExportButton"
import { useTransactionStore } from "@/store/useTransactionStore"
import { AddTransactionModal } from "@/components/dashboard/AddTransactionModal"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function TransactionsPage() {
  const { data } = useTransactionStore()
  const [open, setOpen] = useState(false)
  const { role,setRole } = useTransactionStore()



  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Title */}
          <h2 className="text-2xl font-heading font-semibold">
            <Link
              href="/"
              className="text-muted-foreground hover:underline"
            >
              Dashboard
            </Link>{" "}
            / Transactions
          </h2>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
           {role === "admin" && (
  <Button
    onClick={() => setOpen(true)}
    className="hover:scale-[1.02] active:scale-[0.98]"
  >
    Add Transaction
  </Button>
)}

            <ExportButton data={data} />
          </div>
        </div>

        {/* Table */}
        <section>
          <TransactionsTable />
        </section>

      </main>

      {/* Modal */}
      <AddTransactionModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}