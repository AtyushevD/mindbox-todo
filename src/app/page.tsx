'use client'
import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

import {TaskInput} from './components/TaskInput';
import {TaskList} from './components/TaskList';
import {FilterButtons} from './components/FilterButtons';
import { ClearCompletedButton } from './components/ClearCompletedButton';
import useLocalStorage from './hooks/useLocalStorage';

import { Task } from '../types';

import styles from './page.module.css';

export default function Home() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('mindbox-todo', []);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
    const storedTasks = localStorage.getItem('mindbox-todo')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('mindbox-todo', JSON.stringify(tasks))
    }
  }, [tasks, hasMounted])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(prevTask => prevTask.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (!hasMounted) {
    return null
  }

  return (
    <Container maxWidth="lg">
      <Box className={styles.box}>
        <h1 className={styles.mainHeader}>todos</h1>
        <div className={styles.wrapper}>
          <TaskInput onAddTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
          <div className={styles.filter}>
            <span className={styles.count}>{tasks.filter(task => !task.completed).length} items left</span>
            <FilterButtons filter={filter} setFilter={setFilter} />
            <ClearCompletedButton onToggle={clearCompleted}/>
          </div>
        </div>
      </Box>
    </Container>
  );
}