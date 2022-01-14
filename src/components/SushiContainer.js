import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( {allSushi, setDollars, dollars, eatCount, setEatCount} ) {
  const [sushiIndex, setSushiIndex] = useState(0)  

  const renderSushi = allSushi.slice(sushiIndex, sushiIndex + 4).map(sushi => {
  return (
    <Sushi 
      sushi={sushi} 
      key={sushi.id}
      setDollars={setDollars}
      dollars={dollars}
      eatCount={eatCount}
      setEatCount={setEatCount}
    />
  )})
  console.log(renderSushi)

  function handleMore() {
    setSushiIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
