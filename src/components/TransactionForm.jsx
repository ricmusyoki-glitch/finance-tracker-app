import { useState } from "react"; //This gives the component the ability to store changing data


const TransactionForm = () => {

    const [Title, setTitle] = useState("") 
    const [Amount, setAmount] = useState("") 

    const handleSubmit = (e) => {
        e.preventDefault()

         console.log(Title)
         console.log(Amount)
    }

  return (
    <form onSubmit={handleSubmit}  className="bg-white p-5 rounded-xl shadow space y-4">
        <h2>Add transaction</h2>

        <div className="flex flex-col">

            <label className="mb-1 font-medium">Title</label>

            <input type="text" 
                   placeholder="Title"
                   value={Title}
                   onChange={(e) => setTitle(e.target.value)}
                   className="border p-3 rounded-lg outline-none"/>
        </div>

        <div className="flex flex-col">

            <label className="mb-1 font-medium">Amount</label>

            <input type="number"
             placeholder="Enter amount" 
             value={Amount}
             onChange={(e) => setAmount(e.target.value)}
             className="border p-3 rounded-lg outline-none"/>
        </div>

        <button type="submit" className="bg-green-600 text-white p-3 rounded-lg mt-9">Add transaction</button> 
        
    </form>
  ) 
} 

export default TransactionForm 
