import { Redirect, Router } from "@reach/router";

import { DeckPage, AddCardPage } from "./screens";

import "./App.css";

function App() {
  return (
    <Router>
      <DeckPage path="/decks" />
      <AddCardPage path="/cards/create" />
      <Redirect from="*" to="/decks" noThrow />
    </Router>
  );
}

export default App;
