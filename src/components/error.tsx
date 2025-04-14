import styles from './error.module.css';

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div className={styles.error}>
      <h3>
        Something went wrong <br /> Please try later
      </h3>
      <code>{error.message}</code>
    </div>
  );
}
