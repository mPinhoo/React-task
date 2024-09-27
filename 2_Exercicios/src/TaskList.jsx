const TaskList = ({ tasks }) => {

  if (tasks.length === 0) {
    return <p>Não a tarefas para mostrar.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;
