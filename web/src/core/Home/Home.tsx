import styles from "./Home.module.css";

interface HomeProps {}

export const Home = (props: any) => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  );
};
