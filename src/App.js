import React, { useState } from "react";
import data from "./data/files.json";
import ExpandView from "./components/ExpandView";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ExpandView rootLabel={data[0].name} childItems={data[0].items} />
    </div>
  );
}

export default App;
