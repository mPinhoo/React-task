import { useReducer } from "react";

//Definindo estado inicial
const estadoInicial = { contador: 0 };

// Função reduzir que define como as ações atualizam o estado

function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error("Ação não suportada");
  }
}

const Contador = () => {
  // Iniciar o useReducer com estado inicial e a função modificadora

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contagem: {estado.contador}</p>

      <button onClick={() => dispatch({ tipo: "incrementar" })}>Incrementar</button>
      <button onClick={() => dispatch({ tipo: "resetar" })}>Resetar </button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>Decrementar</button>
    </div>
  );
};

export default Contador;
