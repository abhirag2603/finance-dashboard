"use client"

type Transaction = {
  id: number
  date: string
  amount: number
  category: string
  type: "income" | "expense"
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"

export function Charts({ data }: { data: Transaction[] }) {
  let balance = 0

  const lineData = data.map((t) => {
    if (t.type === "income") balance += t.amount
    else balance -= t.amount

    return {
      date: new Date(t.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      }),
      balance,
    }
  })

  const expenseMap: Record<string, number> = {}

  data
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount
    })

  const pieData = Object.entries(expenseMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  )

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="h-[300px] w-full">
        <h3 className="mb-2 font-medium">Balance Trend</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[300px] w-full">
        <h3 className="mb-2 font-medium">Spending Breakdown</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}