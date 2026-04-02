"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTransactionStore } from "@/store/useTransactionStore"

export function AddTransactionModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { data, setData } = useTransactionStore()

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  })

  const handleAdd = () => {
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(form.amount),
      category: form.category,
      type: form.type as "income" | "expense",
    }

    setData([...data, newTransaction])
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
          />

          <Input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

        <select
  className="w-full border rounded px-2 py-2 bg-background text-foreground"
  value={form.type}
  onChange={(e) =>
    setForm({ ...form, type: e.target.value })
  }
>
  <option value="expense" >
    Expense
  </option>
  <option value="income" >
    Income
  </option>
</select>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}