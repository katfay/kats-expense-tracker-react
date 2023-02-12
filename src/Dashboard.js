import React from "react";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <table>
        <thead>
          <td>Expense</td>
          <td>Amount</td>
          <td>Date</td>
          <td>Notes</td>
          <td>Blank</td>
        </thead>
        <tbody>
          <tr>
            <td>Groceries</td>
            <td>$50</td>
            <td>11/03/2022</td>
            <td>Weekly groceries</td>
            <td>Edit/Delete</td>
          </tr>
          <tr>
            <td>Eating out</td>
            <td>$1,000,000</td>
            <td>03/03/2022</td>
            <td>Dinner with Frankie</td>
            <td>Edit/Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
