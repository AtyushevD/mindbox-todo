import {TaskItem} from '@/app/components/TaskItem';
import { Task } from '@/types';

import styles from './TaskList.module.css';


interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList = ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return <div>
      <hr className={styles.divider} />
      <span className={styles.emptyMessage}>There's nothing yet</span>
      <hr className={styles.divider} />
    </div>;
  }

  return (
    <div>
      <hr className={styles.divider} />
      {tasks.map(task => (        
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
            tasksLength={tasks.length}
          />
      ))}
      {tasks.length <= 1 ? <hr className={styles.divider} /> : null}
    </div>
  );
}