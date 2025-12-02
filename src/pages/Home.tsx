import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  const highlights = [
    { title: 'Classic Cut', description: 'Timeless masculine style with modern precision', price: 'From £25', emoji: '✂️' },
    { title: 'Beard Groom', description: 'Beard trim and shaping with hot towel finish', price: 'From £15', emoji: '🧔' },
    { title: 'Shave & Spa', description: 'Shave with steam and refreshing aftercare', price: 'From £30', emoji: '🪒' },
  ]
  const barbers = [
    { name: 'Mason Reed', title: 'Master Barber', avatar: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Blake Hart', title: 'Senior Barber', avatar: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Jax Carter', title: 'Barber Coach', avatar: 'https://i.pravatar.cc/100?img=3' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-red-600 to-red-700 opacity-20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Bold barbering for the modern man
            </h1>
            <p className="text-lg text-gray-700">
              A modern barbershop with a bold red-and-white aesthetic. Precision cuts, hot towels, and straight-razor shaves in a minimalist setting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                Book Now
              </Link>
              <Link to="/services" className="inline-flex items-center text-red-600 border border-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition">
                View Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <svg width="420" height="320" viewBox="0 0 420 320" aria-label="Barber pole motif" role="img" className="w-full max-w-md">
              <defs>
                <linearGradient id="pole" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" />
                </linearGradient>
              </defs>
              <rect width="420" height="320" rx="16" fill="url(#pole)" />
              <g transform="translate(180,20)">
                <rect width="20" height="260" rx="6" fill="red"/>
                <rect y="0" width="20" height="260" rx="6" fill="white" opacity="0.92"/>
                <rect y="0" width="20" height="260" rx="6" fill="red" transform="translate(0,9)"/>
              </g>
              <g transform="translate(50,60)">
                <rect width="40" height="200" rx="8" fill="red" opacity="0.95"/>
                <rect x="0" y="0" width="40" height="200" rx="8" fill="white" opacity="0.9"/>
                <rect x="0" y="0" width="40" height="200" rx="8" fill="red" transform="translate(18,6)"/>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Signature Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <ServiceCard key={idx} {...h} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Barbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {barbers.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
                <img src={b.avatar} alt={b.name} className="w-20 h-20 rounded-full mb-2" />
                <div className="font-semibold">{b.name}</div>
                <div className="text-sm text-gray-600">{b.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


