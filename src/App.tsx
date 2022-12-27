import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const digitalClock = "some string";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Dog">Digital Clock</div>
        <div>{digitalClock}</div>
        <p>this is where I put my app</p>
        <a
          className="Git-link"
          href="https://github.com/zajonesck"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
