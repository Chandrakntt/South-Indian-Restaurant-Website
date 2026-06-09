'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-gray-600">+91-9999999999</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-gray-600">info@restaurant.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-gray-600">123 Restaurant Street, City</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            {submitted && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg">Message sent!</div>
            )}
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
            <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg" required />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
