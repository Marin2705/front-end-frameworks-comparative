import logo from "./logo.svg";
import "./App.css";

const reactDocsUrl = "https://reactjs.org";

const HelloWorld = ({ name }) => {
  return <h1>Hello {name} !</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld name="World" />
        <a
          className="App-link"
          href={reactDocsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
