import React from "react";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="DashboardHeading">
        <span class="wider">Expense type</span> <span>Amount</span>{" "}
        <span>Date</span>
        <span class="wider">Notes</span>
      </div>
      {/* Placeholder lines below are for expenses entered by user in 'Add an expense form' and then returned by API call */}
      <div className="DashboardResults">
        <div>
          <span class="wider">Food</span>
          <span>$30</span>
          <span>8/2/23</span>
          <span class="wider">Croissants from Gordon St Bakery</span>
        </div>
        <div>Returned component: expense3</div>
        <div>Returned component: expense4</div>
        <div>Returned component: expense5</div>
      </div>
    </div>
  );
}
