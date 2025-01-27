import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setAllSushi(data))
  }, [])


  return (
    <div className="app">
      <SushiContainer 
        allSushi={allSushi}
      />
      <Table />
    </div>
  );
}

export default App;
