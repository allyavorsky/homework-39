import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <Greeting name="Олексій" />
      <hr />
      <Counter />
    </>
  );
}

export default App;
