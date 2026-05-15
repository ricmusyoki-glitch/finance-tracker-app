import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../services/Firebase"

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed md:static z-30 top-0 left-0 h-screen w-64 bg-green-700 text-white p-6 flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8">Finance Tracker</h2>

        <ul className="space-y-4 flex-1">
          <li>
            <Link to="/dashboard" onClick={onClose} className="block hover:bg-green-800 p-2 rounded-xl">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions" onClick={onClose} className="block hover:bg-green-800 p-2 rounded-xl">Transactions</Link>
          </li>
          <li>
            <Link to="/profile" onClick={onClose} className="block hover:bg-green-800 p-2 rounded-xl">Profile</Link>
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="hover:bg-green-800 p-2 rounded-xl text-left w-full mt-4"
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default Sidebar
