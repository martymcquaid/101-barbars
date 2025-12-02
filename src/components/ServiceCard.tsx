import React from 'react'

type Props = {
  title: string
  description: string
  price?: string
  emoji?: string
  image?: string
  alt?: string
  onOpen?: (src: string) => void
}

const ServiceCard: React.FC<Props> = ({ title, description, price, emoji, image, alt, onOpen }) => {
  const hasImage = !!image
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl overflow-hidden transition-shadow">
      {image && (
        <img
          src={image}
          alt={alt ?? title}
          className="w-full h-40 object-cover"
          loading="lazy"
          onClick={() => onOpen?.(image)}
          style={{ cursor: onOpen ? 'zoom-in' : 'default' }}
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {!hasImage && <span className="text-2xl">{emoji ?? '💈'}</span>}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          {price && <span className="text-sm text-gray-500">{price}</span>}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
