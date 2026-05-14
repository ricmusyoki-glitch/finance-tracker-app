import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar" 

const Dashboard = ({ children }) => {


  return (

    <div className="flex">

        <Sidebar />

        <div className="flex-1">

            <Navbar /> 

            <main className="p-6">
                  {children}

            </main>

        </div>

    </div>
  )
}

export default Dashboard 