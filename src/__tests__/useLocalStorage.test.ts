import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '@/app/hooks/useLocalStorage';

beforeEach(() => {
  localStorage.clear()
})

describe('useLocalStorage', () => {
  it('returns initial value when no localStorage data', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'default'))
    expect(result.current[0]).toBe('default')
  })

  it('saves value to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'default'))
    
    act(() => {
      result.current[1]('new value')
    })
    
    expect(result.current[0]).toBe('new value')
    expect(localStorage.getItem('test')).toBe(JSON.stringify('new value'))
  })

  it('reads existing value from localStorage', () => {
    localStorage.setItem('test', JSON.stringify('stored value'))
    
    const { result } = renderHook(() => useLocalStorage('test', 'default'))
    expect(result.current[0]).toBe('stored value')
  })

  it('handles function updates', () => {
    const { result } = renderHook(() => 
      useLocalStorage('counter', 0)
    )
    
    act(() => {
      result.current[1](prev => prev + 1)
    })
    
    expect(result.current[0]).toBe(1)
    expect(localStorage.getItem('counter')).toBe('1')
  })
})