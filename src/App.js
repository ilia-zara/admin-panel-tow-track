import "./App.css";
import DataList from "./components/GetUserData.js";
import LocationList from "./components/GetUserLocation.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin panel</h1>
        <div className="admin-panel">
          <DataList />
          <LocationList />
        </div>
      </header>
    </div>
  );
}

export default App;
