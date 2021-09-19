import { Router, Link } from "@reach/router";

import { Home } from "./core";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
      </nav>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
