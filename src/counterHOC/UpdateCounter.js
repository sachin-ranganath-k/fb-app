import React from "react";
const UpdateCounter = (OriginalComponent) => {  //OriginalComponent is user defined and can be any name
  class NextComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { count: 0 };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NextComponent;
};
export default UpdateCounter;




// import React from "react";
// const UpdateCounter = (OriginalComponent) => {
//   class NextComponent extends React.Component {
//     render() {
//       return <OriginalComponent name="Ranganath" />;
//     }
//   }
//   return NextComponent;
// };
// //}
// export default UpdateCounter;
