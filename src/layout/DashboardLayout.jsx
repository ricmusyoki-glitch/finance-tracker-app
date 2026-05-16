import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 md:p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
