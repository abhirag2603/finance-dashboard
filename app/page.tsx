"use client"

import { Navbar } from "@/components/Navbar"
import { SummaryCards } from "@/components/dashboard/SummaryCards"
import { Charts } from "@/components/dashboard/Charts"
import { Insights } from "@/components/dashboard/Insights"
import { useTransactionStore } from "@/store/useTransactionStore"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Home() {
  const { data } = useTransactionStore()
  const { role,setRole } = useTransactionStore()


  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-heading font-semibold">
            Dashboard ({role})
          </h2>

          <Link href="/transactions">
            <Button variant="outline">
              View Transactions →
            </Button>
          </Link>
        </div>

        {/* Summary */}
        <SummaryCards data={data} />

        {/* Charts */}
        <Charts data={data} />

        {/* Insights */}
        <section className="space-y-4">
          <h3 className="text-lg font-heading font-semibold">
            Insights
          </h3>
          <Insights data={data} />
        </section>

      </main>
    </div>
  )
}