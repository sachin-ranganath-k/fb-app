import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.wishMeProp("Ranganath")}>Click</button>
    </div>
  );
};

export default Child;
