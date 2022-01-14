import React from "react";

function Table({ dollars, eatCount }) {
  const plates = new Array(eatCount).fill(0)
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  

  return (
    <>
      <h1 className="remaining">
        You have: ${dollars} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
