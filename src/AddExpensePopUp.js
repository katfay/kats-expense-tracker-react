import React from "react";

import "./AddExpensePopUp.css";

export default function AddExpensePopUp() {
  return (
    <div>
      <div className="expense-response">
        <h1>Add an expense</h1>
      </div>
      <form className="expense-response">
        <label for="expenseEntered" className="label-newline">
          Expense
        </label>
        <input id="#expenseEntered" type="text" placeholder="Placeholder" />
        <label for="amountEntered" className="label-newline">
          Amount
        </label>
        <input id="#amountEntered" type="number" placeholder="$0" />
        <label for="dateEntered" className="label-newline">
          Date
        </label>
        <input id="#dateEntered" type="date" placeholder="Date" />
        <label for="messageEntered" className="label-newline">
          Message
        </label>
        <input id="#messageEntered" type="text" placeholder="Text area" />
      </form>
      <button id="#addExpenseButton" type="submit" className="expense-button">
        Add
      </button>
    </div>
  );
}
