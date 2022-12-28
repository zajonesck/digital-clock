import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Dog">Digital Clock</div>
        <p>My first React build</p>
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
