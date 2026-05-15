


const TransactionForm = ({
    handleSubmit,
    title,
    amount,
    setTitle,
    setAmount
}) => {




  return (
    <form onSubmit={handleSubmit}  className="bg-white p-5 rounded-xl shadow space y-4">
        <h2>Add transaction</h2>

        <div className="flex flex-col">

            <label className="mb-1 font-medium">Title</label>

            <input type="text" 
                   placeholder="Title"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                   className="border p-3 rounded-lg outline-none"/>
        </div>

        <div className="flex flex-col">

            <label className="mb-1 font-medium">Amount</label>

            <input type="number"
             placeholder="Enter amount" 
             value={amount}
             onChange={(e) => setAmount(e.target.value)}
             className="border p-3 rounded-lg outline-none"/>
        </div>

        <button type="submit" className="bg-green-600 text-white p-3 rounded-lg mt-9">Add transaction</button> 
        
    </form>
  ) 
} 

export default TransactionForm 
