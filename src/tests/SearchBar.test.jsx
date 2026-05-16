import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchBar from '../components/SearchBar'

describe('SearchBar', () => {
  it('renders the input', () => {
    render(<SearchBar search="" setSearch={() => {}} />)
    expect(screen.getByPlaceholderText('Search transactions')).toBeInTheDocument()
  })

  it('displays the current search value', () => {
    render(<SearchBar search="Salary" setSearch={() => {}} />)
    expect(screen.getByDisplayValue('Salary')).toBeInTheDocument()
  })

  it('calls setSearch on input change', () => {
    const setSearch = vi.fn()
    render(<SearchBar search="" setSearch={setSearch} />)
    fireEvent.change(screen.getByPlaceholderText('Search transactions'), {
      target: { value: 'Rent' },
    })
    expect(setSearch).toHaveBeenCalledWith('Rent')
  })
})
