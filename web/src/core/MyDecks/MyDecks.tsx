import { useState } from "react";
import { Text } from "../../components";
import { List } from "../../components/List";
import deckMockData from "./decks.json";

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
      <Text variant="title">My Decks</Text>
      <List
        items={decks.map((deck) => ({ ...deck, title: deck.name }))}
        actions={actions}
      />
    </>
  );
};
