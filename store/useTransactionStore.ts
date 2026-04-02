import { create } from "zustand"
import { transactions as initialData } from "@/lib/mockData"

type Transaction = {
  id: number
  date: string
  amount: number
  category: string
  type: "income" | "expense"
}

type Store = {
  data: Transaction[]
  setData: (data: Transaction[]) => void
  deleteTransaction: (id: number) => void
  updateTransaction: (id: number, amount: number) => void
}

export const useTransactionStore = create<Store>((set) => ({
  data: initialData,

  setData: (data) => set({ data }),

  deleteTransaction: (id) =>
    set((state) => ({
      data: state.data.filter((t) => t.id !== id),
    })),

  updateTransaction: (id, amount) =>
    set((state) => ({
      data: state.data.map((t) =>
        t.id === id ? { ...t, amount } : t
      ),
    })),
}))