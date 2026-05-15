import { useState, useEffect } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import BalanceCard from "../components/BalanceCard"
import Loader from "../components/Loader"

const mockUser = {
  name: "Rick Musyoki",
  email: "rick@example.com",
  totalIncome: 150000,
  totalExpenses: 25000,
  totalSavings: 125000,
}

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(() => setUser(mockUser), 800)
  }, [])

  return (
    <DashboardLayout>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Profile</h1>

        {!user ? (
          <Loader />
        ) : (
          <>
            <div className="bg-white p-6 rounded-xl shadow mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BalanceCard title="Total Income" amount={`Ksh ${user.totalIncome}`} />
              <BalanceCard title="Total Expenses" amount={`Ksh ${user.totalExpenses}`} />
              <BalanceCard title="Total Savings" amount={`Ksh ${user.totalSavings}`} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Profile
