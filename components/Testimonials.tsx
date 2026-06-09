'use client'

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Raj Kumar', text: 'Best South Indian food in the city!', rating: 5 },
    { id: 2, name: 'Priya Singh', text: 'Authentic flavors and excellent service', rating: 5 },
    { id: 3, name: 'Amit Patel', text: 'Great atmosphere and delicious food', rating: 4 },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{item.text}"</p>
              <p className="font-bold">{item.name}</p>
            </div>
          ))}\n        </div>
      </div>
    </section>
  )
}
