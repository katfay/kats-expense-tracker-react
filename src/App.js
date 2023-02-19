import React, { useState } from "react";

import Banner from "./Banner.js";
import AddExpensePopUp from "./AddExpensePopUp";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";

import "./App.css";

export default function App() {
  let [popUp, showPopUp] = useState(false);

  return (
    <div className="App">
      <Banner />
      {popUp ? <AddExpensePopUp /> : null}
      <AddButton />
      <Dashboard />
    </div>
  );
}
