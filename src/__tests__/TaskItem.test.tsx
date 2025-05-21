import { render, screen, fireEvent } from '@testing-library/react'
import {TaskItem} from '@/app/components/TaskItem'
import { Task } from '@/types'

const mockTask: Task = {
  id: '1',
  text: 'Тестовая задача',
  completed: false,
  createdAt: new Date()
}

const mockTaskLength = 1;

describe('TaskItem', () => {
  it('renders task text and checkbox', () => {
    const mockToggle = jest.fn()
    const mockDelete = jest.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockToggle} 
        onDelete={mockDelete}
        tasksLength={mockTaskLength}
      />
    )
    
    expect(screen.getByText('Тестовая задача')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('calls onToggle when checkbox clicked', () => {
    const mockToggle = jest.fn()
    const mockDelete = jest.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockToggle} 
        onDelete={mockDelete}
        tasksLength={mockTaskLength}
      />
    )
    
    fireEvent.click(screen.getByRole('checkbox'))
    expect(mockToggle).toHaveBeenCalledWith('1')
  })

  it('calls onDelete when delete button clicked', () => {
    const mockToggle = jest.fn()
    const mockDelete = jest.fn()
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockToggle} 
        onDelete={mockDelete}
        tasksLength={mockTaskLength}
      />
    )
    
    fireEvent.click(screen.getByRole('button'))
    expect(mockDelete).toHaveBeenCalledWith('1')
  })

  it('shows completed style when task is completed', () => {
    const completedTask = { ...mockTask, completed: true }
    
    render(
      <TaskItem 
        task={completedTask} 
        onToggle={jest.fn()} 
        onDelete={jest.fn()}
        tasksLength={mockTaskLength} 
      />
    )
    
    const text = screen.getByText('Тестовая задача')
    expect(text).toHaveClass('itemCompleted')
  })
})