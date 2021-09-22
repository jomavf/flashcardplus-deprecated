import styles from "./Deck.module.css";
import { MyDecks } from "../../core";

export const DeckPage = (props: any) => {
  return (
    <div className={styles.container}>
      <MyDecks />
    </div>
  );
};
