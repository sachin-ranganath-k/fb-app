import "./App.css";
import ClickCounter from "./counterHOC/CounterHoc";
import NewCounter from "./counterHOC/NewCounterHOC";
import RouteLinks from "./router/RouteLinks";

function App() {
  return (
    <div className="App">
      {/* <RouteLinks /> */}
      <ClickCounter />
      <NewCounter />
    </div>
  );
}

export default App;
