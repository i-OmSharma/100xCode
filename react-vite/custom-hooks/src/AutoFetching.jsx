import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
  }, []);

  return { todos, loading };
}

function App() {
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //       setTodos(res.data.todos);
  //     });
  //   }, []);

  const { todos, loading } = useTodos();

  if (loading) {
    return <div>Loading... </div>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default AutoFetching;
