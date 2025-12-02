import React from 'react'

const Team: React.FC = () => {
  const barbers = [
    { name: 'Mason Reed', title: 'Master Barber', bio: '15+ years in traditional barbering and modern styling', avatar: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Blake Hart', title: 'Senior Barber', bio: 'Shaves, beard shaping, and precision fades', avatar: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Jax Carter', title: 'Barber Trainer', bio: 'Mentors apprentices and maintains shop standards', avatar: 'https://i.pravatar.cc/100?img=3' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
        <p className="text-sm text-gray-600 mb-8">Meet the barbers behind the bold looks.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {barbers.map((b) => (
            <div key={b.name} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img src={b.avatar} alt={b.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="font-semibold text-lg">{b.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{b.title}</p>
              <p className="text-xs text-gray-500">{b.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
