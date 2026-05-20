import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementByOne = () => setCounter((prev) => prev + 1);
  const decrementByOne = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementByOne}>▲</button>
      <button onClick={decrementByOne}>▼</button>
    </div>
  );
}
