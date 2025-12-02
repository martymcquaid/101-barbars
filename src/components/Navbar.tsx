import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Home" className="flex items-center gap-2 no-underline">
            <span className="h-8 w-8 rounded-full bg-red-600" aria-label="logo" />
            <span className="text-xl font-extrabold text-red-700 tracking-tight">101 Barbars</span>
          </Link>
        </div>
        <ul className="hidden md:flex gap-6 uppercase text-sm tracking-wider">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/team', label: 'Team' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/booking', label: 'Booking' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="text-gray-700 hover:text-red-600 transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
