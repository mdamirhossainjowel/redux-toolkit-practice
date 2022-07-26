import "./App.css";
import CounterView from "./features/counter/CounterView";
import PhotosView from "./features/UsersPhoto/PhotosView";

function App() {
  return (
    <div className="App">
      <CounterView/>
      <PhotosView/>
    </div>
  );
}

export default App;
