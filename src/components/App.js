import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [dollars, setDollars] = useState(100)
  const [eatCount, setEatCount] = useState(0)
  

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setAllSushi(data))
  }, [])


  return (
    <div className="app">
      <SushiContainer 
        allSushi={allSushi}
        setDollars={setDollars}
        dollars={dollars}
        eatCount={eatCount}
        setEatCount={setEatCount}
      />
      <Table 
        dollars={dollars}
        eatCount={eatCount}
      />
    </div>
  );
}

export default App;
