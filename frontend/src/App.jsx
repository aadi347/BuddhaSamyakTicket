import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ImgGrid from './components/ImgGrid'
import Footer from './components/Footer'

const App = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
<Navbar />
  <Home />
  <ImgGrid />
  <Footer />
    </div>
  )
}

export default App