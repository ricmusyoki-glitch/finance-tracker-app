const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-white shadow p-4 flex items-center gap-4">
      <button
        onClick={onMenuClick}
        className="md:hidden text-green-700 text-2xl font-bold focus:outline-none"
      >
        ☰
      </button>
      <h1 className="text-xl md:text-2xl font-semibold">Finance Tracker</h1>
    </div>
  )
}

export default Navbar
