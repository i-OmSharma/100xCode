import React, { Suspense, useState } from "react"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Count from "./components/Count"
import Buttons from "./components/Buttons"
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const  Landing = React.lazy(()=> import("./components/Landing"))
const  Appbar  = React.lazy(() => import("./components/Appbar"))

// function App() {
  // const navigate = useNavigate() used inside the BrowserRouter

  // return (
  //   // Client side routing
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/dashboard" element={<Dashboard />} /> // path is the url path that we visit, like / for home and /dashboard for dashboard and other stuffs, page we visit
  //       <Route path="/landing" element={<Landing  />} />
  //     </Routes>
  //   </BrowserRouter>
  // )

  // return (
  //   // Fixed Top-Bar, it remains consistant.
  //   <div>
  //     <div style={{background: "blue", color: "white"}}>
  //       hi this is top bar
  //     </div>
  //     // Client side routing
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/dashboard" element={<Dashboard />} /> // path=" " is the url path that we visit, like / for home and /dashboard for dashboard and other stuffs, page we visit
  //         <Route path="/landing" element={<Landing  />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // )

  // return ( <div>
  //   <div>
  //     <button onClick={() => {
  //       window.location.href = "/dashboard" // Not the client side routing doing hard reload, it is reloading the bundel again and again.
  //     }}>Dashboard</button>

  //     <button onClick={() => {
  //       navigate("/landing")
  //     }} >Landing</button> //Not work
  //   </div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/dashboard" element={<Dashboard />} /> // path=" " is the url path that we visit, like / for home and /dashboard for dashboard and other stuffs, page we visit
  //         <Route path="/landing" element={<Landing  />} />
  //      </Routes>
  //    </BrowserRouter>
  // </div>
  // )
  // everything will be inside the BrowserRouter

  // Code to look-for

//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
//           <Route path="/landing" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div>
//         <button onClick={() => {
//             navigate("/landing")
//           }}>Landing</button> 

//         <button onClick={() => {
//             navigate("/dashboard")
//           }}>Dashboard</button>  
//       </div>
//     </div>
//   )
// }

/*----------------------------------------------------------------------------------*/

function App() {
  const [count,setCount] = useState(0)

  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

export default App
