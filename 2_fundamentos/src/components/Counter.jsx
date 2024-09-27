import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  let x = 10;

  return (
    <div>
      <p>Voce {count} vezes </p>
      <button onClick={() => setCount(count + 1)}> Clique </button>
    </div>
  );
};

export default Counter;
