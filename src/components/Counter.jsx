import React, { useState } from "react";

function Counter() {
  const [сount = 0, setCount] = useState();
  const [value, setValue] = useState("ebaniy sir");
  function increment() {
    setCount(сount + 3);
  }

  function decrement() {
    setCount(сount - 1);
  }

  return (
    <div className="App">
      <h1>{сount}</h1>
      <p>{value}</p>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onPointerLeave={increment} onPointerEnter={increment}>
        увеличить
      </button>
      <button onClick={decrement}>уменьшить</button>
    </div>
  );
}

export default Counter;
