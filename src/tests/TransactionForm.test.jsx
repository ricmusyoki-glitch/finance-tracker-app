import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TransactionForm from '../components/TransactionForm'

const defaultProps = {
  handleSubmit: () => {},
  title: '',
  amount: '',
  type: 'income',
  setTitle: () => {},
  setAmount: () => {},
  setType: () => {},
}

describe('TransactionForm', () => {
  it('renders the form', () => {
    render(<TransactionForm {...defaultProps} />)
    expect(screen.getAllByText('Add Transaction').length).toBeGreaterThan(0)
  })

  it('renders Income and Expense buttons', () => {
    render(<TransactionForm {...defaultProps} />)
    expect(screen.getByText('Income')).toBeInTheDocument()
    expect(screen.getByText('Expense')).toBeInTheDocument()
  })

  it('calls setType with income when Income button clicked', () => {
    const setType = vi.fn()
    render(<TransactionForm {...defaultProps} setType={setType} />)
    fireEvent.click(screen.getByText('Income'))
    expect(setType).toHaveBeenCalledWith('income')
  })

  it('calls setType with expense when Expense button clicked', () => {
    const setType = vi.fn()
    render(<TransactionForm {...defaultProps} setType={setType} />)
    fireEvent.click(screen.getByText('Expense'))
    expect(setType).toHaveBeenCalledWith('expense')
  })

  it('calls setTitle on title input change', () => {
    const setTitle = vi.fn()
    render(<TransactionForm {...defaultProps} setTitle={setTitle} />)
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Salary' } })
    expect(setTitle).toHaveBeenCalledWith('Salary')
  })

  it('calls setAmount on amount input change', () => {
    const setAmount = vi.fn()
    render(<TransactionForm {...defaultProps} setAmount={setAmount} />)
    fireEvent.change(screen.getByPlaceholderText('Enter amount'), { target: { value: '5000' } })
    expect(setAmount).toHaveBeenCalledWith('5000')
  })

  it('calls handleSubmit on form submit', () => {
    const handleSubmit = vi.fn((e) => e.preventDefault())
    render(<TransactionForm {...defaultProps} handleSubmit={handleSubmit} />)
    fireEvent.submit(screen.getByRole('button', { name: 'Add Transaction' }))
    expect(handleSubmit).toHaveBeenCalled()
  })
})
