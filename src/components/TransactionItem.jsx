const TransactionItem = ({title, amount}) => {

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
         
    </div>
  )
}

export default TransactionItem 