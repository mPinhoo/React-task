import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> Você clicou {count} veses</p>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clique Aqui para Adicionar{" "}
      </button>
      <button onClick={() => setCount(count - 1)}>
        {" "}
        Clique Aqui para Remover{" "}
      </button>
    </div>
  );
};

export default Counter;
