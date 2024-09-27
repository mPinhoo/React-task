import "./App.css";
import Counter from "./Counter";
import { Greeting } from "./Greeting";
import TaskList from "./TaskList";

function App() {
  const tasks = [
    { id: 1, text: "Matheus" },
    { id: 2, text: "Fernandes" },
    { id: 3, text: "Pinho" },
  ];
  return (
    <>
      <Greeting user="Matheus" />
      <Counter />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
