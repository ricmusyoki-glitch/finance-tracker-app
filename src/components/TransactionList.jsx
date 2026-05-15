import TransactionItem from './TransactionItem'

const TransactionList = ({
  transactions
}) => {

     
  return (

    <div className='space-y-4'>

        {transactions.map((transaction) => 
        
        <TransactionItem 
        key={transaction.id}
        title={transaction.title}
        amount={transaction.amount}
        />
)} 

    </div>
  ) 
}

export default TransactionList 