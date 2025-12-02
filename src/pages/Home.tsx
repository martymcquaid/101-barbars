import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import BookingModal from '../components/BookingModal'

type Barber = { name: string; title: string; avatar: string }

export default function Home() {
  const highlights = [
    { title: 'Classic Cut', description: 'Timeless masculine style with modern precision', price: 'From £25', emoji: '✂️' },
    { title: 'Beard Groom', description: 'Beard trim and shaping with hot towel finish', price: 'From £15', emoji: '🧔' },
    { title: 'Shave & Spa', description: 'Shave with steam and refreshing aftercare', price: 'From £30', emoji: '🪒' },
  ]

  const barbers: Barber[] = [
    { name: 'Mason Reed', title: 'Master Barber', avatar: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Blake Hart', title: 'Senior Barber', avatar: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Jax Carter', title: 'Barber Coach', avatar: 'https://i.pravatar.cc/100?img=3' },
  ]

  const [bookingOpen, setBookingOpen] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }
  const handleLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div className="min-h-screen bg-white" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <section className="relative overflow-hidden py-20">
        <div className="absolute w-80 h-80 bg-red-600 rounded-full opacity-20" style={{ transform: `translate(${tilt.x * 60}px, ${tilt.y * 40}px)` }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-8">
          <div className="space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Bold barbering for the modern man</h1>
            <p className="text-lg text-gray-700">Precision cuts, hot towels, and clean lines in a minimalist, masculine space.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={()=>setBookingOpen(true)} className="px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition">Book Now</button>
              <Link to="/services" className="px-6 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition">View Services</Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-72 bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-md" style={{ transform: `rotate(${tilt.x * 6}deg)` }} />
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* barber motif overlay */}
              <svg viewBox="0 0 600 360" className="w-full h-full" style={{ opacity:0.25 }}><defs><linearGradient id="barbg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop stopColor="#ddd"/></linearGradient></defs><rect width="600" height="360" fill="url(#barbg)" rx="12"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Signature Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="group hover:scale-105 transform transition duration-300">
                <ServiceCard {...h} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Barbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {barbers.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl transition-shadow">
                <img src={b.avatar} alt={b.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                <div className="font-semibold">{b.name}</div>
                <div className="text-sm text-gray-600">{b.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={()=>setBookingOpen(false)} />
    </div>
  )
}
