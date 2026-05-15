import { useState } from "react"

import Dashboardlayout from "../layout/DashboardLayout"
import Balancecard from "../components/BalanceCard"
import TransactionList from "../components/TransactionList" 
import TransactionForm from "../components/TransactionForm" 


const Dashboard = () => {


  const [transactions, setTransactions] = useState([

    {id: 1, title: 'Salary', amount: 150000,},

    {id: 2, title: 'Grocery shopping', amount: -5000,},

    {id: 3, title: 'Technical course', amount: -20000,},
  ])

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: -Number(amount) 
    }

    setTransactions([...transactions, newTransaction])

    setTitle('')
    setAmount('') 
  }

  const deleteTransaction = (id) => {
    const filteredTransaction =
      transactions.filter((transaction) => transaction.id !== id) 
  
    setTransactions(filteredTransaction)
  } 

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce(
      (total, transaction)=>
         total + transaction.amount, 
      0
    )
  

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce(
      (total, transaction)=>
         total + transaction.amount,
      0
    )
    const balance = income + expenses 


  return (
    <Dashboardlayout>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Balancecard
          title= "Total savings"
          amount = {`Ksh ${balance}`}
          />

          <Balancecard
          title= "Income"
          amount = {`Ksh ${income}`}
          />

          <Balancecard
          title= "Expenses"
          amount = {`Ksh ${expenses}`} 
          />

      </div>

      <div className="mt-8 flex gap-10">

         <div className="w-3/5">
        <TransactionList 
        transactions={transactions}
        deleteTransaction={deleteTransaction}
/>
        </div>

        
        <div className="w-2/5">
        <TransactionForm 
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        handleSubmit={handleSubmit}/> 
        </div>

      </div>

    </Dashboardlayout> 
  )
}

export default Dashboard 