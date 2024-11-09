import { useEffect, useState } from "react";
import { Todo } from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:8080/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 7000);
  });

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;
