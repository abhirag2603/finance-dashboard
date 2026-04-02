type Transaction = {
  id: number
  date: string
  amount: number
  category: string
  type: "income" | "expense"
}

export const transactions: Transaction[] = [
  {
    id: 1,
    date: "2026-03-01",
    amount: 50000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "2026-03-02",
    amount: 1200,
    category: "Food",
    type: "expense",
  },
  {
    id: 3,
    date: "2026-03-05",
    amount: 3000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 4,
    date: "2026-03-06",
    amount: 2000,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 5,
    date: "2026-03-10",
    amount: 1500,
    category: "Travel",
    type: "expense",
  },
]