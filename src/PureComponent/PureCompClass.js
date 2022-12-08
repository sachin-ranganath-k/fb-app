import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ranganath",
    };
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
    return <div>Pure Component</div>;
  }
}

export default PureComp;
