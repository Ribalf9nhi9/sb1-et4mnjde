import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Full-time Trader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "Made +2,450 pips last month following TradePro signals. The mentoring program completely changed my trading approach.",
      profit: "+2,450 pips",
      duration: "Last Month"
    },
    {
      name: "Sarah Chen",
      role: "Professional Trader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "The VIP signals are incredibly accurate. I've seen a 300% improvement in my trading performance since joining.",
      profit: "+1,890 pips",
      duration: "This Month"
    },
    {
      name: "Michael Roberts",
      role: "Forex Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content: "Best investment in my trading career. The community and mentors are incredibly supportive and knowledgeable.",
      profit: "+3,200 pips",
      duration: "Last Quarter"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trader Success Stories</h2>
          <p className="text-xl text-blue-200">Join our community of successful traders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-400/30" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">{testimonial.content}</p>
              <div className="bg-green-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{testimonial.profit}</span>
                  <span className="text-blue-300 text-sm">{testimonial.duration}</span>
                </div>
              </div>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}