import React from "react";

import Banner from "./Banner.js";
import AddExpensePopUp from "./AddExpensePopUp";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <AddExpensePopUp />
      <AddButton />
      <Dashboard />
    </div>
  );
}
