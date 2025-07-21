import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import ImgGrid from './components/ImgGrid'
import Footer from './components/Footer'
import TicketBooking from './pages/TicketBooking'

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen"

      >
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ImgGrid />
              </>
            }
          />
          <Route path="/book-ticket" element={<TicketBooking />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
