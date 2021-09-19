import { Router } from "@reach/router";

import { Home } from "./core";
import { Layout } from "./components";

import "./App.css";

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
      </Router>
    </Layout>
  );
}

export default App;
