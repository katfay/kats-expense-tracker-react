import React from "react";

import "./AddExpensePopUp.css";

export default function AddExpensePopUp() {
  return (
    <div>
      <div className="expense-response">
        <h1>Add an expense</h1>
      </div>
      <form className="expense-response">
        <label for="expense-select" className="label-newline">
          Expense type
        </label>
        <select name="expenseType" id="expense-select">
          <option value="">--Please choose an option--</option>
          <option value="food">Food</option>
          <option value="bills">Bills</option>
          <option value="learning">Work</option>
          <option value="holidays">Holidays</option>
          <option value="social">Social</option>
          <option value="hobbies">Hobbies</option>
          <option value="health">Health</option>
          <option value="gifts">Gifts</option>
          <option value="charity">Charity</option>
          <option value="clothes">Clothes & grooming</option>
          <option value="savings">Savings</option>
        </select>
        <label for="amountEntered" className="label-newline">
          Amount
        </label>
        <input id="#amountEntered" type="number" placeholder="$0" />
        <label for="dateEntered" className="label-newline">
          Date
        </label>
        <input id="#dateEntered" type="date" placeholder="Date" />
        <label for="messageEntered" className="label-newline">
          Notes
        </label>
        <input id="#messageEntered" type="text" placeholder="Text area" />
      </form>
      <button id="#addExpenseButton" type="submit" className="expense-button">
        Add
      </button>
    </div>
  );
}

/*       <form class="">
        <input type="text" id="#" name="category" for="Expense" size="10" />
        <input type="number" id="#" name="amount" for="Amount" size="10" />
        <input type="date" id="#" name="datePaid" for="Date" size="10" />
        <input type="text" id="#" name="notes" for="Notes" size="10" />
      </form> 
*/
