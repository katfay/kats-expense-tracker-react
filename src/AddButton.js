import React, { useState } from "react";
import AddExpensePopUp from "./AddExpensePopUp";

import "./AddButton.css";
import "./AddExpensePopUp.css";

export default function AddButton() {
  let [popUp, setPopUp] = useState(true);
  function handleClick() {
    //alert("Hi");
  }
  return (
    <div>
      <div>{popUp ? <AddExpensePopUp /> : null}</div>
      <div className="AddButton">
        <button
          className="expense-button"
          type="button"
          id=""
          onClick={handleClick}
        >
          Add (button)
        </button>
      </div>
    </div>
  );
}
