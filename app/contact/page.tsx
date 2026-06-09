'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Message sent from ${formData.name}!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-orange-600">🍛 South Indian Restaurant</Link>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">📍 Location</h3>
            <p className="text-gray-600">123 Restaurant Street, Your City, State 12345</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">📧 Email</h3>
            <p className="text-gray-600">info@southindianrestaurant.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">⏰ Hours</h3>
            <p className="text-gray-600">Monday - Sunday: 11:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

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

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              placeholder="Your message..."
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-8">
          <Link href="/" className="text-orange-600 hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
