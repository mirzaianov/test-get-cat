import Card from './components/card';
import styles from './app.module.css';

export default function App() {
  return (
    <main className={styles.app}>
      <h1>Get Cat</h1>
      <Card />
    </main>
  );
}
