import React, { Component } from "react";
import UpdateCounter from "./UpdateCounter";
class ClickCounter extends Component {
  render() {
    //const {count } = this.state
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    );
  }
}
export default UpdateCounter(ClickCounter);

// import React, { Component } from "react";
// import UpdateCounter from "./UpdateCounter";
// class ClickCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <button onClick={this.incrementCount}>Click {count} times</button>
//       </div>
//     );
//   }
// }
// export default UpdateCounter(ClickCounter);
