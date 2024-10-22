import { useState } from 'react'
import './App.css'


/*
toDo application
toDo{
  todos: [{title:"todo1", description: "First toDo", completion: false/true}]
}
*/


//Any time Parent re-render, its child also re-render as well 
function App() {
  const [todos, setTodos] = useState([{
    title:"Go to Gym",
    description:"go to gyme from 7-9",
    completion: false
  }, {
    title:"Study DSA",
    description:"study dsa from 10-12",
    completion: true
  }])

function addTodo() {
  setTodos([...todos, {
    title:"new todo",
    description:"Decription for ur todo"
  }])
}

  return (
    <div>
      <button onClick={addTodo}>Add a random Todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  ) 
}

//toDo app, {
//  title,
//  description,
//  completion
// } 

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    
  </div>
}

export default App
 