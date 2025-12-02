import React from 'react'

const Booking: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request submitted!')
  }
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking</h2>
        <p className="text-sm text-gray-600 mb-6">Reserve your appointment with our bold, minimalist barbering team.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 w-full border rounded-md p-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full border rounded-md p-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service</label>
            <select className="mt-1 w-full border rounded-md p-2">
              <option>Classic Cut</option>
              <option>Beard Groom</option>
              <option>Shave & Spa</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" className="mt-1 w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input type="time" className="mt-1 w-full border rounded-md p-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea className="mt-1 w-full border rounded-md p-2" rows={3} placeholder="Anything we should know?" />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">Submit Booking</button>
        </form>
      </div>
    </section>
  )
}

export default Booking
