import styles from '../styles/Home.module.css';

export default function Error() {
  return (
    <div className={styles.error_main}>
      <h1>There was an error fetching the data.</h1>
      <h2>Please reload the page.</h2>
    </div>
  );
}
