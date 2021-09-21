import { Router } from "@reach/router";

import { Home } from "./screens";

import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
