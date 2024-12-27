import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790106117-e829e14a795f')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-blue-900/90 to-blue-800/90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master Forex Trading with
            <span className="text-blue-400"> Expert Signals</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders using our premium signals and expert mentoring to achieve consistent profits in the forex market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors">
              Start Trading Now
            </button>
            <button className="border-2 border-blue-400 text-blue-100 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800/50 transition-colors">
              View Track Record
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Premium Signals</h3>
            <p className="text-blue-100">Real-time trading signals with detailed entry, stop-loss, and take-profit levels.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <Users className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">1-on-1 Mentoring</h3>
            <p className="text-blue-100">Personal guidance from experienced traders to accelerate your learning.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <Award className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Proven Results</h3>
            <p className="text-blue-100">Consistent performance with verified trading history and testimonials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}