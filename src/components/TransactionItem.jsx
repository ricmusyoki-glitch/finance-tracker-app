const TransactionItem = ({ title, amount, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow gap-2">
      <h3 className="font-semibold flex-1 truncate">{title}</h3>

      <p className={`font-bold text-sm whitespace-nowrap ${amount > 0 ? "text-green-600" : "text-red-500"}`}>
        {amount > 0 ? "+" : "-"} Ksh {Math.abs(amount)}
      </p>

      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
      >
        Delete
      </button>
    </div>
  )
}

export default TransactionItem
