import { Router } from "@reach/router";

import { DeckPage, AddDeckPage } from "./screens";

import "./App.css";

function App() {
  return (
    <Router>
      <DeckPage path="/decks" />
      <AddDeckPage path="/decks/create" />
    </Router>
  );
}

export default App;
