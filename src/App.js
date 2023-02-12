import React from "react";

import Banner from "./Banner.js";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";
import AddExpensePopUp from "./AddExpensePopUp.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      Test
      <Banner />
      <AddButton />
      <Dashboard />
      <AddExpensePopUp />
    </div>
  );
}
