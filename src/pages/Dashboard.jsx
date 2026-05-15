import Dashboardlayout from "../layout/DashboardLayout"
import Balancecard from "../components/BalanceCard"
import TransactionList from "../components/TransactionList" 
import TransactionForm from "../components/TransactionForm" 


const Dashboard = () => {

  return (
    <Dashboardlayout>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Balancecard
          title= "Total savings"
          amount = "Ksh 90,000"
          />

          <Balancecard
          title= "Income"
          amount = "Ksh 110,000"
          />

          <Balancecard
          title= "Expenses"
          amount = "Ksh 20,000"
          />

      </div>

      <div className="mt-8 flex gap-10">

         <div className="w-3/5">
        <TransactionList />
        </div>

        
        <div className="w-2/5">
        <TransactionForm />
        </div>

      </div>

    </Dashboardlayout> 
  )
}

export default Dashboard 