import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.js";
import Banner from "./Banner.js";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";
import AddExpensePopUp from "./AddExpensePopUp.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Banner />
    <AddButton />
    <Dashboard />
    <AddExpensePopUp />
  </React.StrictMode>
);
