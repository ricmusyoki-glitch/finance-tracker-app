import TransactionItem from './TransactionItem'

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
      {transactions.map((transaction) =>
        <TransactionItem
          key={transaction.id}
          title={transaction.title}
          amount={transaction.amount}
          onDelete={() => deleteTransaction(transaction.id)}
        />
      )}
    </div>
  )
}

export default TransactionList
