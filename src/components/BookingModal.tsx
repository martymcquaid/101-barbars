import React, { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

const BookingModal: React.FC<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Classic Cut')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request submitted!')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" onClick={onClose} aria-label="Booking modal backdrop">
      <div className="bg-white rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Booking</h3>
          <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-black">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="w-full border rounded p-2" required />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email" className="w-full border rounded p-2" required />
          <select value={service} onChange={e => setService(e.target.value)} className="w-full border rounded p-2">
            <option>Classic Cut</option>
            <option>Beard Groom</option>
            <option>Shave & Spa</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border rounded p-2" required />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} className="border rounded p-2" required />
          </div>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notes" rows={3} className="w-full border rounded p-2" />
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Submit Booking</button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
