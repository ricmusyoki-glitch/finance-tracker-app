import Dashboardlayout from "../layout/DashboardLayout"
import Balancecard from "../components/BalanceCard"
import TransactionList from "../components/TransactionList" 


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

      <div className="mt-8">

        <TransactionList />
      </div>

    </Dashboardlayout> 
  )
}

export default Dashboard 