import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {
  const [count, setCount] = useState(0)

  // return (
  //   // Client side routing
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/dashboard" element={<Dashboard />} /> // path is the url path that we visit, like / for home and /dashboard for dashboard and other stuffs, page we visit
  //       <Route path="/landing" element={<Landing  />} />
  //     </Routes>
  //   </BrowserRouter>
  // )

  return ( 
    // Fixed Top-Bar, it remains consistant.
    <div>
      <div style={{background: "blue", color: "white"}}>
        hi this is top bar
      </div>
      // Client side routing
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> // path is the url path that we visit, like / for home and /dashboard for dashboard and other stuffs, page we visit
          <Route path="/landing" element={<Landing  />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
