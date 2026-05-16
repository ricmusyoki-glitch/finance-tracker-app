import DashboardLayout from "../layout/DashboardLayout"
import BalanceCard from "../components/BalanceCard"
import useFinance from "../context/useFinance"

const Profile = () => {
  const { user, transactions } = useFinance()

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <DashboardLayout>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Profile</h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
            {user?.email?.charAt(0).toUpperCase() ?? "U"}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user?.displayName || "User"}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BalanceCard title="Total Income" amount={`Ksh ${income}`} />
          <BalanceCard title="Total Expenses" amount={`Ksh ${Math.abs(expenses)}`} />
          <BalanceCard title="Total Savings" amount={`Ksh ${income + expenses}`} />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Profile
