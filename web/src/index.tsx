import "./assets/styles/_global-variables.css";
import "./assets/styles/_base.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Layout } from "./components";

const sidebarItems = [
  { name: "My Decks", path: "/decks" },
  { name: "Create Deck", path: "/decks/create" },
];

const headerItems = [
  { name: "Login", path: "/login" },
  { name: "Sign up", path: "/signup" },
];

ReactDOM.render(
  <React.StrictMode>
    <Layout sidebarItems={sidebarItems} headerItems={headerItems}>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
