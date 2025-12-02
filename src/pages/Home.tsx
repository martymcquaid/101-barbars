import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  const highlights = [
    { title: 'Classic Cut', description: 'Timeless masculine style with modern precision', price: 'From £25', emoji: '✂️' },
    { title: 'Beard Groom', description: 'Beard trim and shaping with hot towel finish', price: 'From £15', emoji: '🧔' },
    { title: 'Shave & Spa', description: 'Shave with steam and refreshing aftercare', price: 'From £30', emoji: '🪒' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-red-600 to-red-700 opacity-20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Bold, precise barbering for the modern man
            </h1>
            <p className="text-lg text-gray-700">
              A modern barbershop experience with a bold red-and-white aesthetic. Clean lines, high-contrast typography, and barber-grade service.
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
            <div className="w-full max-w-md">
              <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Barber pole motif" role="img">
                <defs>
                  <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#fff" offset="0" />
                    <stop stopColor="#f3f3f3" offset="1" />
                  </linearGradient>
                </defs>
                <rect width="600" height="420" rx="20" fill="url(#grad)"/>
                <g transform="translate(40,40)">
                  <rect width="25" height="260" fill="red" rx="4" />
                  <rect y="0" width="25" height="260" fill="white" rx="4" />
                  <rect y="0" width="25" height="260" fill="red" rx="4" transform="translate(12,0)" />
                </g>
                <g transform="translate(350,140)">
                  <rect width="180" height="60" rx="10" fill="#111" opacity="0.85"/>
                  <rect x="10" y="6" width="160" height="48" rx="8" fill="#fff" opacity="0.8"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <ServiceCard key={i} {...h} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Signature Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <ServiceCard key={`sig-${idx}`} {...h} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

