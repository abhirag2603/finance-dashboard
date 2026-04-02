"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Transaction = {
  id: number
  date: string
  amount: number
  category: string
  type: "income" | "expense"
}

export function SummaryCards({ data }: { data: Transaction[] }) {
  const totalIncome = data
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalExpenses = data
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const balance = totalIncome - totalExpenses

  const cards = [
    {
      title: "Total Balance",
      value: `₹${balance.toLocaleString()}`,
    },
    {
      title: "Income",
      value: `₹${totalIncome.toLocaleString()}`,
    },
    {
      title: "Expenses",
      value: `₹${totalExpenses.toLocaleString()}`,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Card className="hover:shadow-md hover:-translate-y-0.5 transition" key={card.title}>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {card.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}