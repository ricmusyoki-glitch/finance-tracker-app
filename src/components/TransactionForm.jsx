const TransactionForm = ({ handleSubmit, title, amount, type, setTitle, setAmount, setType }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow space-y-4">
      <h2 className="font-bold text-lg">Add Transaction</h2>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setType("income")}
          className={`flex-1 p-2 rounded-lg font-semibold border ${
            type === "income" ? "bg-green-600 text-white" : "text-green-600 border-green-600"
          }`}
        >
          Income
        </button>
        <button
          type="button"
          onClick={() => setType("expense")}
          className={`flex-1 p-2 rounded-lg font-semibold border ${
            type === "expense" ? "bg-red-500 text-white" : "text-red-500 border-red-500"
          }`}
        >
          Expense
        </button>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg outline-none"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 rounded-lg outline-none"
          min="0"
          required
        />
      </div>

      <button type="submit" className="bg-green-600 text-white w-full p-3 rounded-lg font-semibold">
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm
