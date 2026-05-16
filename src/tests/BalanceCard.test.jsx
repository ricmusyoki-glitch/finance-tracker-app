import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BalanceCard from '../components/BalanceCard'

describe('BalanceCard', () => {
  it('renders the title', () => {
    render(<BalanceCard title="Total Income" amount="Ksh 5000" />)
    expect(screen.getByText('Total Income')).toBeInTheDocument()
  })

  it('renders the amount', () => {
    render(<BalanceCard title="Total Income" amount="Ksh 5000" />)
    expect(screen.getByText('Ksh 5000')).toBeInTheDocument()
  })

  it('renders different titles and amounts', () => {
    render(<BalanceCard title="Expenses" amount="Ksh 200" />)
    expect(screen.getByText('Expenses')).toBeInTheDocument()
    expect(screen.getByText('Ksh 200')).toBeInTheDocument()
  })
})
