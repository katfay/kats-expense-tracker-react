import React from "react";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div class="dashboard-headings">
        <label for="">Expense</label>
        <label for="">Amount</label>
        <label for="">Date</label>
        <label for="">Notes</label>
      </div>
      <form class="">
        <input type="text" id="#" name="category" for="Expense" size="10" />
        <input type="number" id="#" name="amount" for="Amount" size="10" />
        <input type="date" id="#" name="datePaid" for="Date" size="10" />
        <input type="text" id="#" name="notes" for="Notes" size="10" />
      </form>
    </div>
  );
}
