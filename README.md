# 💰 Finance Dashboard UI

A modern, responsive **finance dashboard** built with Next.js, featuring transaction tracking, data visualization, and role-based UI — designed to demonstrate frontend architecture, state management, and UX thinking.

---

## 📸 Screenshots

### Dashboard
![Dashboard](./public/screenshots/dashboard.png)

### Transactions
![Transactions](./public/screenshots/transactions.png)

### Add Transaction Modal
![Modal](./public/screenshots/modal.png)

---

## 🚀 Features

### 📊 Dashboard Overview (`/`)
- **Summary Cards**
  - Total Balance
  - Income
  - Expenses  
- **Charts**
  - 📈 Balance trend (time-based visualization)
  - 🥧 Spending breakdown (category-based visualization)
- **Insights Section**
  - Highest spending category
  - Income vs expenses
  - Smart suggestions
- **Navigation**
  - “View Transactions” button → `/transactions`

---

### 📋 Transactions Page (`/transactions`)
- **Transactions Table**
  - Date, Amount, Category, Type
- **Search & Filtering**
  - Search by category
  - Filter by Income / Expense
- **CRUD Functionality**
  - ✏️ Edit transaction (inline)
  - 🗑️ Delete transaction (custom dialog)
  - ➕ Add transaction (modal)
- **Export Feature**
  - Export data as CSV or JSON

---

### 🔐 Role-Based UI
- Switch between:
  - **Viewer** → Read-only
  - **Admin** → Full CRUD access  
- Implemented via dropdown in navbar

---

### 🌙 Theming
- Light / Dark mode using `next-themes`
- Fully integrated with `shadcn/ui`
- Theme-aware components (no hardcoded colors)

---

## 🧠 State Management

### 🟢 Zustand (Global State)
Used for managing transaction data across the app:
- Centralized store (`/store/useTransactionStore.ts`)
- Eliminates prop drilling
- Syncs data between dashboard & transactions page

---

### 🔁 Data Reset Behavior (Intentional)
- Transactions are initialized from **static mock data**
- Zustand keeps state in memory
- **On refresh → state resets**

👉 This is intentional because:
- No backend is used
- Focus is on frontend architecture
- Keeps evaluation predictable

---

### 💾 LocalStorage Usage
- Theme preference → handled by `next-themes`
- User role → stored for UI switching

---

## 🎨 UI & Design

### 🧩 shadcn/ui
Used for:
- Buttons
- Cards
- Tables
- Dialogs
- Selects  

Ensures:
- Accessibility
- Consistency
- Theme compatibility

---

### ✨ UX Enhancements
- Responsive design (mobile → desktop)
- Smooth micro-interactions
- Empty states & feedback
- Inline editing UX
- Clean spacing & layout hierarchy

---

## ⚙️ Tech Stack

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui
- Recharts
- Zustand
- next-themes

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run development server
```bash
npm run dev
```
### 4. Open in browser
```bash
http://localhost:3000
```
## 📁 Project Structure

```bash
/app
  page.tsx                # Dashboard
  /transactions
    page.tsx             # Transactions page

/components
  /dashboard             # Core UI components
  /ui                    # shadcn components

/store
  useTransactionStore.ts # Zustand store

/lib
  mockData.ts            # Static data
  exportUtils.ts         # CSV/JSON export

```


  ## ⚡ Development Approach

- Component-driven architecture  
- Clean state management (Zustand)  
- Separation of concerns  
- Scalable UI design  

---

## 🤖 Prompting & Debugging

- Used AI-assisted prompting for:
  - UI structuring  
  - Feature planning  
  - Debugging issues  

- Combined with manual reasoning for:
  - Correctness  
  - UX refinement  

---

## 🔗 References

- Next.js Docs → https://nextjs.org/docs  
- shadcn/ui → https://ui.shadcn.com  
- Zustand → https://zustand-demo.pmnd.rs  
- Recharts → https://recharts.org  
- Tailwind CSS → https://tailwindcss.com  

---

## 🏁 Final Notes

This project demonstrates:

- Real-world frontend architecture  
- Thoughtful UX design  
- Modern React ecosystem usage  

---

## 📌 Future Improvements

- Backend integration  
- Authentication  
- Persistent database  
- Advanced analytics  

---

## 👨‍💻 Author

**Abhirag Bakode**

📧 Email: abhirag4169@gmail.com

---

