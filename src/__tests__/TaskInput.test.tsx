import { render, screen, fireEvent } from '@testing-library/react'
import {TaskInput} from '@/app/components/TaskInput'


describe('TaskInput', () => {
  it('renders input', () => {
    const mockAdd = jest.fn()
    render(<TaskInput onAddTask={mockAdd} />)
    
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
  })

  it('calls onAddTask with input value when enter clicked', async () => {
    const mockAdd = jest.fn()
    render(<TaskInput onAddTask={mockAdd} />)
    
    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'Новая задача' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    
    expect(mockAdd).toHaveBeenCalledWith('Новая задача')
  })

  it('clears input after adding task', async () => {
    const mockAdd = jest.fn()
    render(<TaskInput onAddTask={mockAdd} />)
    
    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'Новая задача' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    
    expect(input).toHaveValue('')
  })

  it('does not call onAddTask when input is empty', async () => {
    const mockAdd = jest.fn()
    render(<TaskInput onAddTask={mockAdd} />)
    
    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(mockAdd).not.toHaveBeenCalled()
  })
})