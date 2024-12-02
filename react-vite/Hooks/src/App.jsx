import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get("localhost:3000/sumserver")
    .then(function(res) {
      setTodos(res.data.todos)
    })
  }, [])

  return (
    <>
      {todos.map(todo=> <Todo title={todo.title} description={todo.description}/>)} 
    </>
  )
}

function Todo({title, description}) {
  return <div>
    {title}
    {description}
  </div>
}
export default App
