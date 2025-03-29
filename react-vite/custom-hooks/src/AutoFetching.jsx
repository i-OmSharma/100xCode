import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });


    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);


    return () => {
        clearInterval(value) // clear Interval is for stop the revious function
    }
  }, [n]); // if u use n it will change according to n, which means whenever n chages a new time interval.

  return { todos, loading };
}

function AutoFetching() {
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //       setTodos(res.data.todos);
  //     });
  //   }, []);

  const { todos, loading } = useTodos(5);

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
