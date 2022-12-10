import React, { PureComponent } from "react";

class PureCompClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ranganath",
    };
    this.state={
      ee:"rr"
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ranganath",
      });
    }, 3000);
  }
  render() {
    console.log("--------Pure Component------");
    return <div>{this.state.ee}</div>;
  }
}

export default PureCompClass;
