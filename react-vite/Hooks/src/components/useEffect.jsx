//useEffect

/* 
The "useEffect" hook , it alow us to perform side effects n funcions components.
Side effects are operations that can affect other components or can't be done during rendering,
such as data fetching, subcriptions, or manually changing the DOM in React components. 

"useEffect" hook serves the same purpose as 'componentDiMount', 'componentDiUpdate' and 'componentWillUnmount'
in React components, but unified into a single API
*/

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

// if the parent re-renders the chilld will only run this code if dependency changes  