import { render, screen, fireEvent } from '@testing-library/react';
import {FilterButtons} from '@/app/components/FilterButtons';

describe('FilterButtons', () => {
  it('renders all filter buttons', () => {
    const mockSetFilter = jest.fn()
    render(<FilterButtons filter="all" setFilter={mockSetFilter} />)
    
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })

  it('calls setFilter with correct value when button clicked', () => {
    const mockSetFilter = jest.fn()
    render(<FilterButtons filter="all" setFilter={mockSetFilter} />)
    
    fireEvent.click(screen.getByText('Active'))
    expect(mockSetFilter).toHaveBeenCalledWith('active')
    
    fireEvent.click(screen.getByText('Completed'))
    expect(mockSetFilter).toHaveBeenCalledWith('completed')
  })

  it('shows active state for selected filter', () => {
    const { rerender } = render(
      <FilterButtons filter="all" setFilter={jest.fn()} />
    )
    
    expect(screen.getByText('All')).toHaveClass('activeButton')
    
    rerender(<FilterButtons filter="active" setFilter={jest.fn()} />)
    expect(screen.getByText('Active')).toHaveClass('activeButton')
  })
})