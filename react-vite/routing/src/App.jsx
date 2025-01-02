import { useState } from 'react'
import { BrowsesrRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    // Client side routing
    <BrowsesrRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing  />} />
      </Routes>
    </BrowsesrRouter>
  )
}

export default App
