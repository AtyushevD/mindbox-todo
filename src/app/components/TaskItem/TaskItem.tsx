import { IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import { Task } from '@/types';

import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  tasksLength: number;
}

export const TaskItem = ({ task, onToggle, onDelete, tasksLength }: TaskItemProps) => {
  return (
    <>
      <div className={styles.listItem}>
        <span className={styles.checkbox}>
          <input 
            type='checkbox' 
            onChange={() => onToggle(task.id)} 
            checked={task.completed} 
            className={styles.input}
            id={task.id}
          />
          {task.completed ? <svg 
            className={styles.icon} 
            width="18" 
            height="14" 
            viewBox="0 0 18 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.6 11.1L1.4 6.9L0 8.3L5.6 13.9L17.6 1.9L16.2 0.5L5.6 11.1Z" fill="#2FAFAF"></path>
          </svg> : null}
        </span>
        <label htmlFor={task.id} className={task.completed ? styles.itemCompleted : styles.item}>{task.text}</label>
        <div className={styles.deleteButton}>
          <IconButton edge="end" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      {tasksLength > 1 ? <hr className={styles.divider} /> : null}
    </>
  );
}