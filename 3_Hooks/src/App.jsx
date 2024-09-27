import "./App.css";
import CalculoPesado from "./components/CalculoPesado";
import ComponentFilho from "./components/ComponentFilho";
import Contador from "./components/Contador";
import ContadorCallback from "./components/ContadorCallback";
import Container from "./components/Container";
import DisplayWindowSize from "./components/DisplayWindowSize";
import ExemploUseEffects from "./components/ExemploUseEffects";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuContextoProvider } from "./contexts/MeuContexto";

function App() {
  return (
    <>
      {/* useEffect */}
      <ExemploUseEffects />
      <Timer />
      {/* useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* useReducer */}
      {/* estados mais complexos */}
      {/* custom hook */}
      <DisplayWindowSize />
      {/* slots e children props */}
      <Container>
        <h1> Titulo da Seção</h1>
        <p>Sub titulo</p>
        <Contador />
      </Container>
      {/* Sincronizar o estado com props */}
      {/* prop => componente => chamadaAPI => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1}/>
      {/* useMemo e useCallback */}
      <CalculoPesado numero={5}/>
      <ContadorCallback />
    </>
  );
}

export default App;
