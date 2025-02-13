import { useState } from 'react'
import React from 'react' // if  want to use React.Component 
import { Component } from 'react' //if u want to use Component
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}


//Without any hooks
class MyComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {count:0}
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>

      </div>
    )
  }
}



// function MyComponent() {
//   const [count, setCount] = useState(0)

//   const incrementCount = () => {
//     setCount(count+1)
//   }

//   return(
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   )
// }

export default App
