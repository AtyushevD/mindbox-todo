import styles from './ClearCompletedButton.module.css';


interface ClearCompletedButtonProps {
    onToggle: () => void;
}
export const ClearCompletedButton = ({onToggle}: ClearCompletedButtonProps) => {
    return (
        <button className={styles.button} onClick={() => onToggle()}>
            Clear completed
        </button>
    )
}