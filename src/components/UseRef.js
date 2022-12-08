import React, { createRef, useRef } from "react";
function UseRef() {
  let inputRef = useRef("1234567324");
  // let a = createRef();
  // console.log(inputRef);
  function controlInput() {
    inputRef.current.value = "abc";
    console.log(inputRef.current.value);
    // inputRef.current.style.display="none"
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
      {/* <p>{inputRef.current}</p> */}
    </div>
  );
}
export default UseRef;

// Importing everything as React
// import * as React from "react";

// const App = () => {
//   // Creating textInputRef variable
//   const textInputRef = React.createRef();

//   // This method will be used to focus textInput
//   const textInputFocusHandler = () => {
//     // Focusing input element
//     textInputRef.current.focus();
//   };

//   return (
//     <div>
//       {/** Attaching ref variable using element's ref attribute */}
//       <input ref={textInputRef} type="text" placeholder="Enter something" />

//       {/** Attaching textInputFocusHandler method to button click */}
//       <button onClick={textInputFocusHandler}>Click me to focus input</button>
//     </div>
//   );
// };

// export default App;
