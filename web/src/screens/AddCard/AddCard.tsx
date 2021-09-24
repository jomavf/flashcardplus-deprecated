import styles from "./AddCard.module.css";
import { Text, Input, Button } from "../../components";
import { useState } from "react";
import constants from "../../shared/contants";

export const AddCardPage = (props: any) => {
  const cardApiUrl = `${constants.API_URL}/cards`;

  const [cardList] = useState([{ id: 1, label: "Javascript", value: "js" }]);

  const createCard = async () => {
    const card = {
      front: "fronttest",
      back: "back",
      deckId: "1",
    };
    const response = await fetch(cardApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    const result = await response.json();
    console.log("result", result);
  };

  return (
    <div className={styles.container}>
      <Text variant="title">Add Card</Text>
      <div className={styles.form}>
        <Input label="Type" type="select" options={cardList} />
        <Input label="Deck" type="select" options={cardList} />
        <Input label="Front" type="textarea" />
        <Input label="Back" type="textarea" />
      </div>
      <Button onClick={createCard}>Create Card</Button>
    </div>
  );
};
