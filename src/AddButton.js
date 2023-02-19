import React from "react";
import AddExpensePopUp from "./AddExpensePopUp";

import "./AddButton.css";
import "./AddExpensePopUp.css";

export default function AddButton() {
  function openPopUp(event) {
    alert("Clicked");
  }
  return (
    <div className="AddButton">
      <button
        className="expense-button"
        type="button"
        id=""
        onClick={openPopUp}
      >
        Add (button)
      </button>
    </div>
  );
}
