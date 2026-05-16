import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TransactionList from '../components/TransactionList'

const mockTransactions = [
  { id: '1', title: 'Salary', amount: 5000 },
  { id: '2', title: 'Groceries', amount: -1000 },
]

describe('TransactionList', () => {
  it('renders all transactions', () => {
    render(<TransactionList transactions={mockTransactions} deleteTransaction={() => {}} />)
    expect(screen.getByText('Salary')).toBeInTheDocument()
    expect(screen.getByText('Groceries')).toBeInTheDocument()
  })

  it('renders empty list without crashing', () => {
    const { container } = render(<TransactionList transactions={[]} deleteTransaction={() => {}} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('calls deleteTransaction with correct id', () => {
    const deleteTransaction = vi.fn()
    render(<TransactionList transactions={mockTransactions} deleteTransaction={deleteTransaction} />)
    fireEvent.click(screen.getAllByText('Delete')[0])
    expect(deleteTransaction).toHaveBeenCalledWith('1')
  })
})
