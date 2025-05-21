import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ClearCompletedButton } from '@/app/components/ClearCompletedButton';

describe('ClearCompletedButton', () => {
  it('renders button with correct text', () => {
    const mockOnToggle = jest.fn();
    render(<ClearCompletedButton onToggle={mockOnToggle} />);
    
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const mockOnToggle = jest.fn();
    render(<ClearCompletedButton onToggle={mockOnToggle} />);
    
    const button = screen.getByText('Clear completed');
    fireEvent.click(button);
    
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct CSS class', () => {
    const mockOnToggle = jest.fn();
    render(<ClearCompletedButton onToggle={mockOnToggle} />);
    
    const button = screen.getByText('Clear completed');
    expect(button).toHaveClass('button');
  });
});