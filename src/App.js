import React from "react";
import amor from "./img/img-test/amairani.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-jorge">hellow world</h1>
        <h2 className="text-amairani">hellow world</h2>
        <h3>hellow world</h3>
        <h4>hellow world</h4>
        <img src={amor} alt="amairani" />
      </header>
    </div>
  );
}

export default App;
