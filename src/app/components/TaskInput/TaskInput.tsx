import { useState } from 'react';
import { Box } from '@mui/material';

import styles from './TaskInput.module.css';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput('');
    }
  };

  return (
    <Box className={styles.taskInputBox}>
      <svg 
        className={styles.icon} 
        width="64" 
        height="64" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_102_2)">
          <path d="M19.76 22.9067L32 35.12L44.24 22.9067L48 26.6667L32 42.6667L16 26.6667L19.76 22.9067Z" fill="#D0D0D0"></path>
        </g>
        <defs>
          <clipPath id="clip0_102_2">
            <rect width="64" height="64" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        type='text'
        className={styles.taskInput}
      />
    </Box>
  );
}