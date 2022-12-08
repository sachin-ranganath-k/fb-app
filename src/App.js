import "./App.css";
import UseRef from "./components/UseRef";
import ClickCounter from "./counterHOC/CounterHoc";
import NewCounter from "./counterHOC/NewCounterHOC";
import RouteLinks from "./router/RouteLinks";

function App() {
  return (
    <div className="App">
      {/* <RouteLinks /> */}
      {/* <ClickCounter />
      <NewCounter /> */}
      <UseRef />
    </div>
  );
}

export default App;
