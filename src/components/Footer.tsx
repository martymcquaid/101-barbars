import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-sm">
        <p className="mb-2">© {new Date().getFullYear()} 101 Barbars. All rights reserved.</p>
        <p>Designed with a bold red-and-white theme. Built with React and Tailwind.</p>
      </div>
    </footer>
  )
}

export default Footer
