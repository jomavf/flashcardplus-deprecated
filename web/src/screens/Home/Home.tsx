import styles from "./Home.module.css";
import { MyDecks } from "../../core";

export const Home = (props: any) => {
  return (
    <div className={styles.container}>
      <MyDecks />
    </div>
  );
};
