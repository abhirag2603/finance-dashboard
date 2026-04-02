"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Transaction = {
  id: number
  date: string
  amount: number
  category: string
  type: "income" | "expense"
}

export function Insights({ data }: { data: Transaction[] }) {
  // 🔥 Highest spending category
  const expenseMap: Record<string, number> = {}

  data
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount
    })

  let highestCategory = "N/A"
  let highestAmount = 0

  Object.entries(expenseMap).forEach(([category, amount]) => {
    if (amount > highestAmount) {
      highestAmount = amount
      highestCategory = category
    }
  })

  // 📊 Totals
  const totalIncome = data
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalExpenses = data
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0)

  // 💡 Suggestion logic
  let suggestion = "Your finances look balanced."

  if (totalExpenses > totalIncome) {
    suggestion = "Your expenses exceed income. Try reducing spending."
  } else if (highestCategory === "Food") {
    suggestion = "You spend a lot on food. Consider optimizing dining expenses."
  } else if (highestCategory === "Shopping") {
    suggestion = "Shopping is your top expense. Plan purchases wisely."
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="hover:shadow-md hover:-translate-y-0.5 transition">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Highest Spending
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">
            {highestCategory}
          </p>
          <p className="text-sm text-muted-foreground">
            ₹{highestAmount.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md hover:-translate-y-0.5 transition">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Income vs Expenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Income: ₹{totalIncome.toLocaleString()}
          </p>
          <p className="text-sm">
            Expenses: ₹{totalExpenses.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md hover:-translate-y-0.5 transition">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Insight
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{suggestion}</p>
        </CardContent>
      </Card>
    </div>
  )
}