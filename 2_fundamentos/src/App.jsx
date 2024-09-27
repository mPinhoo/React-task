import "./App.css";


import Daddy from "./components/Daddy";
import Description from "./components/Description";
import GoodMorning from "./components/GoodMorning";
import Welcome from "./components/Welcome";
import Dog from "./components/Dog";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import DaddyFunction from "./components/DaddyFunction";
import Form from "./components/Form";
import RenderCondicional from "./components/RenderCondicional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import ButtonStyle from "./components/ButtonStyle";
import ButtonBlue from "./components/ButtonBlue";

function App() {
  return (
    <>
      {/* Criação de componentes */}
      <Welcome />
      {/* Expressões JSX */}
      <GoodMorning />
      {/* Componentes dentro de componentes */}
      <Daddy />
      {/* Props */}
      <Description name="Matheus" age={25} />
      {/* Desestruturação de Props*/}
      <Dog name="Derick" breed="Cat" />
      {/* UseStates -> Hook*/}
      <Counter />
      {/* Multiplos Estados -> Hook*/}
      <UserInfoForm />
      {/* Eventos*/}
      <Button />
      {/* Passar funções de manipulação com props*/}
      <DaddyFunction />
      {/* Eventos de form*/}
      <Form />
      {/* Renderização condicional */}
      <RenderCondicional user="Matheus" />
      {/* Expressão Ternaria */}
      <LoginButton loggedIn={true} />
      <LoginButton loggedIn={false} />
      {/* Render Null */}
      <Warning warning={true} />
      {/* Listas e Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      {/* Estilos por Atributo */}
      <ButtonStyle />
      {/* Estilos Globais */}
      <ButtonBlue />
      {/* Exercicios*/}
    </>
  );
}

export default App;
