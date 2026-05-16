import { useContext } from "react"
import FinanceContext from "./FinanceContext"

const useFinance = () => useContext(FinanceContext)

export default useFinance
