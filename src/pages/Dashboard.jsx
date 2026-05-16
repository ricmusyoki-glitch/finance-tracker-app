import { useState } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import BalanceCard from "../components/BalanceCard"
import TransactionList from "../components/TransactionList"
import TransactionForm from "../components/TransactionForm"
import useFinance from "../context/useFinance"

const Dashboard = () => {
  const { transactions, handleAdd, handleDelete } = useFinance()
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

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BalanceCard title="Total Savings" amount={`Ksh ${income + expenses}`} />
        <BalanceCard title="Income" amount={`Ksh ${income}`} />
        <BalanceCard title="Expenses" amount={`Ksh ${Math.abs(expenses)}`} />
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/5">
          <TransactionList transactions={transactions} deleteTransaction={handleDelete} />
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
    </DashboardLayout>
  )
}

export default Dashboard
