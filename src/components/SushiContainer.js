import React, { useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( {allSushi} ) {
  const [displaySushi, setDisplaySushi] = useState([...allSushi.slice(0, 4)])  

  return (
    <div className="belt">
      {displaySushi.map(sushi => {
        return <Sushi sushi={sushi} key={sushi.id}/>
      })}
      <MoreButton setDisplaySushi={setDisplaySushi} sushi={displaySushi}/>
    </div>
  );
}

export default SushiContainer;
