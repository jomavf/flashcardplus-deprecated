import { Router } from "@reach/router";

import { Home } from "./core";

import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
