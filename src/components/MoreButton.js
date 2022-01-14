import React, {useState} from "react";

function MoreButton( {setDisplaySushi, sushi} ) {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)

  function handleMoreClick() {
    setStartIndex(startIndex + 4)
    setEndIndex(endIndex + 4)
    setDisplaySushi(sushi.slice(startIndex, endIndex))
  }

  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
