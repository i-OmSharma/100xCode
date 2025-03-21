import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const todos = useTodos(); 
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//     });
//   }, []);

  return (
    <>
      {todos.map((todo) => (<Track todo={todo} />))}
    </>
  );
}


function Track({ todo }) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default DataFetching



function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
      });
    }, []);

    return todos;
}