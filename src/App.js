import React from "react";

import Banner from "./Banner.js";
import AddButton from "./AddButton.js";
import Dashboard from "./Dashboard.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <AddButton />
      <Dashboard />
    </div>
  );
}
