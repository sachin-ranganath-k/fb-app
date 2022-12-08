import React, { useState } from "react";
import Child from "./Child";

const Parent = (props) => {
    console.log(props)
  const [data, setData] = useState("Welcome to");
  const wishMe = (name) => {
    //name argument's value is coming from Child.js
    alert(`${data} ${name}`);
  };

  return (
    <div>
      <Child wishMeProp={wishMe} />
    </div>
  );
};

export default Parent;
