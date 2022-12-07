import React, { Component } from "react";
import UpdateCounter from "./UpdateCounter";
class NewCounter extends Component {
  render() {
    //const {count } = this.state
    const { count, incrementCount } = this.props;
    return (
      <div>
        <p onMouseOver={incrementCount}>Hovered {count} times</p>
      </div>
    );
  }
}
export default UpdateCounter(NewCounter);

// import React, { Component } from "react";
// import UpdateCounter from "./UpdateCounter";
// class NewCounter extends Component {
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
//         <p onMouseOver={this.incrementCount}>Click {count} times</p>
//       </div>
//     );
//   }
// }
// export default UpdateCounter(NewCounter);
