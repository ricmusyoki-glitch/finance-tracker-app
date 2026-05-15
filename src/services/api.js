import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "./Firebase"

const TRANSACTIONS = "transactions"

export const addTransaction = async (uid, { title, amount }) => {
  const docRef = await addDoc(collection(db, TRANSACTIONS), {
    title,
    amount: Number(amount),
    uid,
    createdAt: serverTimestamp(),
  })
  return { id: docRef.id, title, amount: Number(amount) }
}

export const deleteTransaction = async (id) => {
  await deleteDoc(doc(db, TRANSACTIONS, id))
}

export const transactionsQuery = (uid) =>
  query(collection(db, TRANSACTIONS), where("uid", "==", uid))
