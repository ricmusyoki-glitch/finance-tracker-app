import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TransactionItem from '../components/TransactionItem'

describe('TransactionItem', () => {
  it('renders the title', () => {
    render(<TransactionItem title="Salary" amount={5000} onDelete={() => {}} />)
    expect(screen.getByText('Salary')).toBeInTheDocument()
  })

  it('shows green and + for income', () => {
    render(<TransactionItem title="Salary" amount={5000} onDelete={() => {}} />)
    const amount = screen.getByText(/Ksh 5000/)
    expect(amount).toHaveClass('text-green-600')
    expect(amount.textContent).toContain('+')
  })

  it('shows red and - for expense', () => {
    render(<TransactionItem title="Rent" amount={-2000} onDelete={() => {}} />)
    const amount = screen.getByText(/Ksh 2000/)
    expect(amount).toHaveClass('text-red-500')
    expect(amount.textContent).toContain('-')
  })

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = vi.fn()
    render(<TransactionItem title="Salary" amount={5000} onDelete={onDelete} />)
    fireEvent.click(screen.getByText('Delete'))
    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
