import styles from './controls.module.css';

type ControlsProps = {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isRefreshing: boolean;
  setIsRefreshing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Controls({
  isEnabled,
  setIsEnabled,
  isRefreshing,
  setIsRefreshing,
}: ControlsProps) {
  return (
    <ul className={styles.controls}>
      <li className={styles.inputWrapper}>
        <input
          id="isEnabled"
          type="checkbox"
          checked={isEnabled}
          onChange={() => setIsEnabled((prev) => !prev)}
        />
        <label htmlFor="isEnabled">Enabled</label>
      </li>
      <li className={styles.inputWrapper}>
        <input
          id="isRefreshing"
          type="checkbox"
          checked={isEnabled && isRefreshing}
          onChange={() => setIsRefreshing((prev) => !prev)}
          disabled={!isEnabled}
        />
        <label htmlFor="isRefreshing">Auto-refresh every 5 seconds</label>
      </li>
    </ul>
  );
}
