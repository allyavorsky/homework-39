import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Лічильник</h2>
      <p>Поточне значення: {count}</p>
      <button onClick={handleIncrement}>+ 1</button>
    </div>
  );
};

export default Counter;
