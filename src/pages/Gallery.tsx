import React from 'react'

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1555992336-0308f3c6f4a8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515828414690-6d2a7f6360f0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529070535425-1e3d3f2e1bde?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
        <p className="text-sm text-gray-600 mb-8">A visual flavor of our bold red-and-white aesthetic.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx+1}`} className="w-full h-48 object-cover rounded-lg shadow" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
