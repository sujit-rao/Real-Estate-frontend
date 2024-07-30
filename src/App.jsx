import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Property from './pages/Property'
import AddProperty from './pages/AddProperty'
import Favourites from './pages/Favourites'
import Bookings from './pages/Bookings'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
