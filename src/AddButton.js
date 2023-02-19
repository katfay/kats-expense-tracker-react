import React, { useState } from "react";
import AddExpensePopUp from "./AddExpensePopUp";

import "./AddButton.css";
import "./AddExpensePopUp.css";

export default function AddButton() {
  let [popUp, showPopUp] = useState(false);

  return (
    <div className="AddButton">
      <button
        className="expense-button"
        type="button"
        id=""
        onClick={showPopUp}
      >
        Add (button)
      </button>
    </div>
  );
}
