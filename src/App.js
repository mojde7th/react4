import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <ion-icon name="car-sport-outline"></ion-icon>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input
          label={"inputcontain"}
          erp={"error from erp, phone lenght less that 4"}
        />
      </header>
    </div>
  );
}

export default App;
