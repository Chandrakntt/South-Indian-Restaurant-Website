'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ReservePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Reservation for ${formData.name} on ${formData.date}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-orange-600">🍛 South Indian Restaurant</Link>
        </div>
      </nav>

      {/* Reservation Form */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Reserve Your Table</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                <option key={num} value={num}>
                  {num} Guests
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Confirm Reservation
          </button>
        </form>

        <div className="text-center mt-8">
          <Link href="/contact" className="text-orange-600 hover:underline font-semibold">
            Questions? Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}
