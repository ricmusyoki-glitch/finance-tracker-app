import { Routes, Route, Navigate } from "react-router-dom"
import useFinance from "./context/useFinance"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Profile from "./pages/Profile"
import Loader from "./components/Loader"

function App() {
  const { user, authLoading } = useFinance()

  if (authLoading) return <Loader />

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" replace />} />
      <Route path="/transactions" element={user ? <Transactions /> : <Navigate to="/" replace />} />
      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
