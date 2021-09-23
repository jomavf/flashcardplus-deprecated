import styles from "./AddCard.module.css";
import { Text, Input, Button } from "../../components";
import { useState } from "react";

export const AddCardPage = (props: any) => {
  const [cardList] = useState([{ label: "Javascript", value: "js" }]);

  return (
    <div className={styles.container}>
      <Text variant="title">Add Card</Text>
      <div className={styles.form}>
        <Input label="Type" type="select" options={cardList} />
        <Input label="Deck" type="select" options={cardList} />
        <Input label="Front" type="textarea" />
        <Input label="Back" type="textarea" />
      </div>
      <Button onClick={() => {}}>Create Card</Button>
    </div>
  );
};
