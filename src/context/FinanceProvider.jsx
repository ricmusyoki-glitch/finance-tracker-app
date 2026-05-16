import { useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { onSnapshot } from "firebase/firestore"
import { auth } from "../services/Firebase"
import { addTransaction, deleteTransaction, transactionsQuery } from "../services/api"
import FinanceContext from "./FinanceContext"

const FinanceProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    signOut(auth).then(() => {
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser)
        setAuthLoading(false)
        if (!firebaseUser) setTransactions([])
      })
      return unsub
    })
  }, [])

  useEffect(() => {
    if (!user) return
    const unsub = onSnapshot(transactionsQuery(user.uid), (snapshot) => {
      setTransactions(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return unsub
  }, [user])

  const handleAdd = async ({ title, amount }) => {
    const tempId = Date.now().toString()
    setTransactions((prev) => [...prev, { id: tempId, title, amount: Number(amount) }])
    const saved = await addTransaction(user.uid, { title, amount })
    setTransactions((prev) => prev.map((t) => (t.id === tempId ? saved : t)))
  }

  const handleDelete = async (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
    await deleteTransaction(id)
  }

  return (
    <FinanceContext.Provider value={{ user, authLoading, transactions, handleAdd, handleDelete }}>
      {children}
    </FinanceContext.Provider>
  )
}

export default FinanceProvider
