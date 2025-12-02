import React from 'react'

type Props = {
  open: boolean
  image: string
  onClose: () => void
}

const ImageLightbox: React.FC<Props> = ({ open, image, onClose }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" onClick={onClose} aria-label="Image lightbox backdrop">
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
        <img src={image} alt="Service" className="w-full h-auto max-h-screen object-contain" />
      </div>
    </div>
  )
}

export default ImageLightbox