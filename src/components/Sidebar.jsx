import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">

        <h2 className="text-4xl font-bold mb-8">Finance Tracker</h2>

        <ul className="space-y-4">

            <li>
              <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded-2xl">Dashboard</Link>
              </li>

            <li>
              <Link to="/transactions" className="hover:bg-gray-700 p-2 rounded-2xl">Transactions</Link>
              </li>

            <li>
              <Link to="/profile" className="hover:bg-gray-700 p-2 rounded-2xl">Profile</Link>
            </li>
        
            <li>
             <Link to="/logout" className="hover:bg-gray-700 p-2 rounded-2xl">Logout</Link>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar 