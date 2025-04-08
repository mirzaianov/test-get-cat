import styles from './button.module.css';

type ButtonProps = {
  handleClick: () => void;
  isEnabled: boolean;
};

export default function Button({ handleClick, isEnabled }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={!isEnabled}
    >
      Get cat
    </button>
  );
}
