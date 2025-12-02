import React, { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import ImageLightbox from '../components/ImageLightbox'

type ServiceItem = {
  title: string
  description: string
  price?: string
  image?: string
  alt?: string
  category: 'Hair'|'Beard'|'Shave'
}

const Services: React.FC = () => {
  const items: ServiceItem[] = [
    {
      title: 'Classic Barbershop Cut',
      description: 'Precision cut with a clean finish and hot towel',
      price: 'From £25',
      image: 'https://picsum.photos/id/1011/600/400',
      alt: 'Barber cutting hair',
      category: 'Hair',
    },
    {
      title: 'Hot Towel Shave',
      description: 'Shaving with hot towels and pampering',
      price: 'From £30',
      image: 'https://picsum.photos/id/1015/600/400',
      alt: 'Shaving service',
      category: 'Shave',
    },
    {
      title: 'Beard Trim & Shape',
      description: 'Styled beard with contour and line-up',
      price: 'From £15',
      image: 'https://picsum.photos/id/1027/600/400',
      alt: 'Beard trim',
      category: 'Beard',
    },
    {
      title: 'Texture & Fade',
      description: 'Texture cut with subtle fade for modern shape',
      price: 'From £28',
      image: 'https://picsum.photos/id/1025/600/400',
      alt: 'Texture and fade',
      category: 'Hair',
    },
    {
      title: 'Beard Line Up',
      description: 'Precise lines for a bold silhouette',
      price: 'From £12',
      image: 'https://picsum.photos/id/102/600/400',
      alt: 'Beard line up',
      category: 'Beard',
    },
    {
      title: 'Kids Cut',
      description: 'Kid-friendly cuts with style',
      price: 'From £12',
      image: 'https://picsum.photos/id/1035/600/400',
      alt: 'Kids haircut',
      category: 'Hair',
    },
  ]

  const [filter, setFilter] = useState<'All'|'Hair'|'Beard'|'Shave'>('All')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const categories: Array<'All'|'Hair'|'Beard'|'Shave'> = ['All','Hair','Beard','Shave']

  const visible = items.filter(it => filter === 'All' || it.category === filter)

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Services</h2>
          <p className="text-sm text-gray-600">A modern, masculine catalog of barbering services with bold visuals.</p>
          <div className="ml-auto flex gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={()=>setFilter(cat)} className={`px-3 py-1 rounded-full border ${filter===cat ? 'bg-red-600 text-white' : 'bg-white'}`}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((s, idx) => (
            <ServiceCard key={idx} title={s.title} description={s.description} price={s.price} image={s.image} alt={s.alt} onOpen={(src)=>setLightbox(src)} />
          ))}
        </div>
      </section>
      {lightbox && (
        <ImageLightbox open={true} image={lightbox} onClose={()=>setLightbox(null)} />
      )}
    </>
  )
}

export default Services
