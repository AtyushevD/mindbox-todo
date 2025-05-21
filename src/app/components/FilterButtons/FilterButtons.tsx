import styles from './FilterButtons.module.css';

interface FilterButtonsProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export const FilterButtons = ({ filter, setFilter }: FilterButtonsProps) => {
  return (
    <div className={styles.controls}>
      <button
        className={filter === 'all' ? `${styles.activeButton} ${styles.button}` : styles.button}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? `${styles.activeButton} ${styles.button}` : styles.button}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? `${styles.activeButton} ${styles.button}` : styles.button}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}