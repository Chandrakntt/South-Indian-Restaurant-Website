'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🍛 South Indian Restaurant</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600"
          >
            ☰
          </button>
          <ul className={`${menuOpen ? 'block' : 'hidden'} md:flex gap-6`}>
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-600">Menu</Link></li>
            <li><Link href="/reserve" className="hover:text-orange-600">Reserve</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to South Indian Cuisine</h2>
        <p className="text-xl text-gray-600 mb-8">Experience authentic flavors from South India</p>
        <div className="flex gap-4 justify-center">
          <Link href="/menu" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700">
            View Menu
          </Link>
          <Link href="/reserve" className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50">
            Reserve Table
          </Link>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Specialties</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Dosa', 'Idli', 'Sambar'].map((dish) => (
              <div key={dish} className="bg-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                <p className="text-2xl mb-2">🍲</p>
                <h4 className="text-xl font-bold mb-2">{dish}</h4>
                <p className="text-gray-600">Authentic South Indian specialty</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 South Indian Restaurant. All rights reserved.</p>
          <p className="text-gray-400 mt-2">📍 Your City | 📞 +1-XXX-XXX-XXXX</p>
        </div>
      </footer>
    </div>
  )
}
