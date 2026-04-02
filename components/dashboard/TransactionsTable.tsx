"use client"

import { useEffect, useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useTransactionStore } from "@/store/useTransactionStore"
import { DeleteDialog } from "./DeleteDialog"

type Transaction = {
    id: number
    date: string
    amount: number
    category: string
    type: "income" | "expense"
}

export function TransactionsTable() {
    const { data, deleteTransaction, updateTransaction } = useTransactionStore()

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [role, setRole] = useState("viewer")

    const [editingId, setEditingId] = useState<number | null>(null)
    const [editValue, setEditValue] = useState("")

    useEffect(() => {
        const savedRole = localStorage.getItem("role") || "viewer"
        setRole(savedRole)
    }, [])

    const filteredData = useMemo(() => {
        return data
            .filter((t) =>
                t.category.toLowerCase().includes(search.toLowerCase())
            )
            .filter((t) =>
                filter === "all" ? true : t.type === filter
            )
    }, [data, search, filter])

    const handleDeleteConfirm = () => {
        if (deleteId !== null) {
            deleteTransaction(deleteId)
            setDeleteId(null)
        }
    }

    const handleEdit = (t: Transaction) => {
        setEditingId(t.id)
        setEditValue(t.amount.toString())
    }

    const handleSave = (id: number) => {
        updateTransaction(id, Number(editValue))
        setEditingId(null)
    }

    const [deleteId, setDeleteId] = useState<number | null>(null)

    return (
        <div className="space-y-4">

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <Input
                    placeholder="Search by category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="md:w-1/3"
                />

                <div className="flex gap-2">
                    <Button
                        variant={filter === "all" ? "default" : "outline"}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </Button>
                    <Button
                        variant={filter === "income" ? "default" : "outline"}
                        onClick={() => setFilter("income")}
                    >
                        Income
                    </Button>
                    <Button
                        variant={filter === "expense" ? "default" : "outline"}
                        onClick={() => setFilter("expense")}
                    >
                        Expense
                    </Button>
                </div>
            </div>

            {/* Count */}
            <p className="text-sm text-muted-foreground">
                Showing {filteredData.length} transactions
            </p>

            {/* Table */}
            <div className="border rounded-lg overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            {role === "admin" && <TableHead>Actions</TableHead>}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {filteredData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-10">
                                    No transactions found
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredData.map((t) => (
                                <TableRow key={t.id}>
                                    <TableCell>{t.date}</TableCell>
                                    <TableCell>{t.category}</TableCell>

                                    <TableCell className="capitalize">
                                        <span
                                            className={
                                                t.type === "income"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                                            {t.type}
                                        </span>
                                    </TableCell>

                                    <TableCell className="text-right">
                                        {editingId === t.id ? (
                                            <input
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className="border px-2 py-1 rounded w-24 text-right"
                                            />
                                        ) : (
                                            `₹${t.amount.toLocaleString()}`
                                        )}
                                    </TableCell>

                                    {role === "admin" && (
                                        <TableCell className="flex gap-2">
                                            {editingId === t.id ? (
                                                <Button size="sm" onClick={() => handleSave(t.id)}>
                                                    Save
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button size="sm" onClick={() => handleEdit(t)}>
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        onClick={() => setDeleteId(t.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                    <DeleteDialog
  open={deleteId !== null}
  onClose={() => setDeleteId(null)}
  onConfirm={handleDeleteConfirm}
/>
                                                </>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}