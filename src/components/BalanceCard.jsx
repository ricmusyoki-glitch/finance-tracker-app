
const BalanceCard = ({title, amount}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-gray-500 text-lg">
            {title}
        </h2>

        <p className="text-3xl font-bold mt-2 text-green-700">
            {amount}
        </p>

    </div>
  )
}

export default BalanceCard