//import { useState } from 'react'
import React, { useEffect, useState } from 'react' // if  want to use React.Component 
import { Component } from 'react' //if u want to use Component
import './App.css'
import DataFetching from './DataFetching';
import AutoFetching from './AutoFetching';
import MousePointer from './hooks/MousePointer';

function App() {
  //const [count, setCount] = useState(0)
  const [render, setRender] = useState(true)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setRender(false)
  //   }, 5000);
  // }, []);

  if (!render) {
    return <div>
      2nd div
    </div>
  }

  return (
    <>
      {/* {render ? <MyComponent /> : <div></div> } 
      <DataFetching />
      <AutoFetching /> */}
      <h1> hello.. </h1>
      <MousePointer />
    </> 
  )
}


//Without any hooks
// class MyComponent extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {count:0}
//   }

//   incrementCount = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>

//       </div>
//     )
//   }
// }



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

// LifeCycle Events
//functional Component

// function MyComponent() {
//   useEffect(() => {
//     console.error("Component Mounted")

//     return () => {
//       console.log("Component Unmounted")
//     } //u can return function inside the useEffect u can only return function nothing else, this function runs anytime the dependencies change or the component unmounts. It is used somewhat for cleaing up the previous mounted component.
//   },[])

//   return <div>
//     From inside my Component
//   </div>
// }



//Class Based components
class MyComponent extends React.Component{
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return <div>
      From inside my Component
    </div>
  }
}


export default App
