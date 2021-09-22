import styles from "./MyDecks.module.css";

import { useState } from "react";
import { Button, Text } from "../../components";
import { List } from "../../components/List";
import deckMockData from "./decks.json";
import { navigate } from "@reach/router";

export interface Deck {
  id: string;
  name: string;
  description: string;
  cards: Card[];
}

export interface Card {
  id: string;
  question: string;
  answer: string;
  image: string;
}

export const MyDecks = () => {
  const [decks] = useState<Deck[]>(deckMockData || []);

  const actions = [
    {
      title: "Start",
      onClick: () => {
        console.log("Start playing");
      },
    },
    {
      title: "Edit",
      onClick: () => {
        console.log("Edit");
      },
    },
    {
      title: "Remove",
      onClick: () => {
        console.log("Remove");
      },
    },
    {
      title: "Rename",
      onClick: () => {
        console.log("Rename");
      },
    },
  ];

  return (
    <>
      <div className={styles.titleContainer}>
        <Text variant="title">My Decks</Text>
        <div>
          <Button onClick={() => navigate("decks/create")}>Create Deck</Button>
        </div>
      </div>
      <List
        items={decks.map((deck) => ({ ...deck, title: deck.name }))}
        actions={actions}
      />
    </>
  );
};
