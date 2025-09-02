import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import "./App.css";

function App() {
  return (
    <>
      <Greeting name="Олексій" />
      <hr />
      <Counter />
      <hr />
      <CounterClass />
    </>
  );
}

export default App;
