import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

// Layout wraps pages with a consistent Navbar and Footer
const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white text-gray-900">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
 
export default App

