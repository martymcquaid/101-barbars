import React from 'react'

type Props = {
  title: string
  description: string
  price?: string
  emoji?: string
}

const ServiceCard: React.FC<Props> = ({ title, description, price, emoji }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{emoji ?? '💈'}</span>
        {price && <span className="text-sm text-gray-500">{price}</span>}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default ServiceCard
