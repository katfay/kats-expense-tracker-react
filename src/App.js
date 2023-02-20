import React, { useState } from "react";

import Banner from "./Banner.js";
import AddExpensePopUp from "./AddExpensePopUp";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";

import "./App.css";

/*
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
*/

// Example of how to initially hide the pop up

export default function App() {
  let [popUp, setPopUp] = useState(false);
  let [addButton, setAddButton] = useState(true);
  let [dashboard, setDashboard] = useState(true);

  return (
    <div className="App">
      <Banner />
      {popUp ? <AddExpensePopUp /> : null}
      {addButton ? <AddButton /> : null}
      {dashboard ? <Dashboard /> : null}
    </div>
  );
}
