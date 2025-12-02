import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services: React.FC = () => {
  const items = [
    { title: 'Classic Barbershop Cut', description: 'Precision cut with a clean finish and hot towel', price: 'From £25', emoji: '✂️' },
    { title: 'Hot Towel Shave', description: 'Full beard shave with hot towels and pampering', price: 'From £30', emoji: '🪒' },
    { title: 'Beard Trim & Shape', description: 'Styled beard with contour and line-up', price: 'From £15', emoji: '🧔' },
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Services</h2>
        <p className="text-sm text-gray-600 mb-8">A modern, masculine menu of cuts, shaves, and grooming.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
