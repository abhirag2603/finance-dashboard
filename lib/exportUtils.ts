export function exportToCSV(data: any[], filename = "transactions") {
  if (!data.length) return

  const headers = Object.keys(data[0])
  const csvRows = [
    headers.join(","), // header row
    ...data.map((row) =>
      headers.map((field) => JSON.stringify(row[field])).join(",")
    ),
  ]

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv",
  })

  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${filename}.csv`
  a.click()
}

export function exportToJSON(data: any[], filename = "transactions") {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  })

  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${filename}.json`
  a.click()
}