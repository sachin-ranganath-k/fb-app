import React, { useEffect, useState } from "react";

const PureComponent = () => {
  const [name, setName] = useState("Ranganath");
  useEffect(() => {
    setInterval(() => {
      setName("Ranganath");
    }, 3000);
  });

  console.log("--------Memo Component------");
  return <div>Memo Component {name}</div>;
};

export default React.memo(PureComponent);
