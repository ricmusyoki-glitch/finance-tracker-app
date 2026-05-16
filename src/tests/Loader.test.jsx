import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Loader from '../components/Loader'

describe('Loader', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loader />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders the spinning element', () => {
    const { container } = render(<Loader />)
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })
})
