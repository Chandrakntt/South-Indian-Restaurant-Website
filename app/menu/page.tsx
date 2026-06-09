'use client'

import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  { category: 'Dosa', items: ['Masala Dosa', 'Paper Dosa', 'Paneer Dosa'] },
  { category: 'Idli', items: ['Idli Sambar', 'Idli Chutney', 'Gunpowder Idli'] },
  { category: 'Curries', items: ['Sambar', 'Rasam', 'Chole Bhature'] },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Dosa')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-orange-600">🍛 South Indian Restaurant</Link>
        </div>
      </nav>

      {/* Menu Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {menuItems.map((menu) => (
            <button
              key={menu.category}
              onClick={() => setSelectedCategory(menu.category)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === menu.category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {menu.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems
            .find((m) => m.category === selectedCategory)
            ?.items.map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-4xl mb-2">🍲</p>
                <h3 className="text-xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600">₹250</p>
              </div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/reserve"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 font-semibold"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  )
}
