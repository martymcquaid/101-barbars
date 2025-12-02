import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services: React.FC = () => {
  const items = [
    {
      title: 'Classic Barbershop Cut',
      description: 'Precision cut with a clean finish and hot towel',
      price: 'From £25',
      image: 'https://images.unsplash.com/photo-1520813792234-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Hot Towel Shave',
      description: 'Full beard shave with hot towels and pampering',
      price: 'From £30',
      image: 'https://images.unsplash.com/photo-1533777329823-d0e3a9a9a5a1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Beard Trim & Shape',
      description: 'Styled beard with contour and line-up',
      price: 'From £15',
      image: 'https://images.unsplash.com/photo-1520974736060-3f7b64b2e636?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Texture & Fade',
      description: 'Texture cut with subtle fade for modern shape',
      price: 'From £28',
      image: 'https://images.unsplash.com/photo-1520974739571-1b8c3f9f8a1e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Beard Line Up',
      description: 'Precise lines for a bold, defined silhouette',
      price: 'From £12',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Kids Cut',
      description: 'Kid-friendly cuts with a focus on comfort and style',
      price: 'From £12',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Services</h2>
        <p className="text-sm text-gray-600 mb-8">A modern, masculine catalog of barbering services with bold visuals.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <ServiceCard key={idx} title={s.title} description={s.description} price={s.price} image={s.image} alt={s.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
