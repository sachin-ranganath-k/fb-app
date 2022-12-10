import "./App.css";
import UseRef from "./components/UseRef";
import ClickCounter from "./counterHOC/CounterHoc";
import NewCounter from "./counterHOC/NewCounterHOC";
import Parent from "./dataFromChildToParent/Parent";
import PureCompClass from "./PureComponent/PureCompClass";
import PureCompFunctional from "./PureComponent/PureCompFunctional";

import RouteLinks from "./router/RouteLinks";

function App() {
  return (
    <div className="App">
      {/* <RouteLinks /> */}
      {/* <ClickCounter />
      <NewCounter /> */}
      <UseRef />
      {/* <Parent /> */}
      {/* <PureCompFunctional /> */}
      {/* <PureCompClass /> */}
    </div>
  );
}

export default App;
