const TransactionItem = ({title, amount, onDelete}) => {

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">

        <div>
            <h3 className="font-semibold">
                {title}
            </h3>
        </div>

        <div>
            <p className="font-bold">
                {amount}
            </p>
        </div>

        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded-lg">
            Delete
        </button> 
         
    </div>
  )
}

export default TransactionItem 