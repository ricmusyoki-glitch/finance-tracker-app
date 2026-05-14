import TransactionItem from './TransactionItem'

const TransactionList = () => {

    const transactions = [
        {id: 1, title: 'Salary', amount: '150,000'},
        {id: 2, title: 'Grocery shopping', amount: '5,000'},
        {id: 3, title: 'Online course', amount: '20,000'},
    ] 
  return (

    <div className='space-y-4'>

        {transactions.map((transactions) => 
        
        <TransactionItem 
        key={transactions.id}
        title={transactions.title}
        amount={transactions.amount}
        />
)} 

    </div>
  ) 
}

export default TransactionList 