import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
<Navbar />
  <Home />
    </div>
  )
}

export default App