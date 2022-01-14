import React, { useState } from "react";

function Sushi( {sushi, setDollars, dollars, eatCount, setEatCount} ) {
  const { name, img_url, price} = sushi
  const [eaten, setEaten] = useState(false)

  function handleEaten() {
    if (dollars > price) {
    setEaten(!eaten)
    setDollars(dollars - price)
    setEatCount(eatCount + 1)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
