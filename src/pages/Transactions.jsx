import { useState } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import SearchBar from "../components/SearchBar"
import TransactionList from "../components/TransactionList"
import TransactionForm from "../components/TransactionForm"
import BalanceCard from "../components/BalanceCard"
import useFinance from "../context/useFinance"

const Transactions = () => {
  const { transactions, handleAdd, handleDelete } = useFinance()
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")

  const handleSubmit = (e) => {
    e.preventDefault()
    const signed = type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount))
    handleAdd({ title, amount: signed })
    setTitle("")
    setAmount("")
  }

  const filtered = transactions.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <DashboardLayout>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Transactions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <BalanceCard title="Total Income" amount={`Ksh ${income}`} />
          <BalanceCard title="Total Expenses" amount={`Ksh ${Math.abs(expenses)}`} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/5">
            <SearchBar search={search} setSearch={setSearch} />
            {filtered.length > 0 ? (
              <TransactionList transactions={filtered} deleteTransaction={handleDelete} />
            ) : (
              <p className="text-gray-500">No transactions found.</p>
            )}
          </div>
          <div className="w-full md:w-2/5">
            <TransactionForm
              title={title}
              setTitle={setTitle}
              amount={amount}
              setAmount={setAmount}
              type={type}
              setType={setType}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Transactions
