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
    <div>
      <section className="bg-gradient-to-br from-white via-red-50 to-red-100 text-gray-900 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">Bold, minimal grooming for men</h1>
            <p className="text-gray-700 text-lg mb-6">A modern barbershop with a bold red-and-white aesthetic. Precision cuts, classic shaves, and grooming in style.</p>
            <Link to="/booking" className="inline-block bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700">Book Now</Link>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 rounded-lg"></div>
            <p className="mt-4 text-sm text-gray-700">Iconic barber pole design, modern layout, high-contrast typography.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Signature Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <ServiceCard key={i} {...h} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
