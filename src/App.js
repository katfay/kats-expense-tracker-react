import React, { useState } from "react";

import Banner from "./Banner.js";
import AddExpensePopUp from "./AddExpensePopUp";
import Dashboard from "./Dashboard.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <AddExpensePopUp />
      <div className="add-button-div">
        <a href="/add-expense" target="_blank">
          <button className="add-button" type="button" id="">
            Add (button)
          </button>
        </a>
      </div>
      <Dashboard />
    </div>
  );
}
