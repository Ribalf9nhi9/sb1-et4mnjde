import React from 'react';
import { BookOpen, Video, MessageSquare, Users } from 'lucide-react';

export default function Mentoring() {
  return (
    <section id="mentoring" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Forex Mentoring</h2>
          <p className="text-xl text-gray-600">Learn from experienced traders and accelerate your trading journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">1-on-1 Coaching</h3>
            <p className="text-gray-600 mb-6">
              Get personalized guidance tailored to your trading goals and experience level. Our mentors will help you develop a winning strategy and mindset.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Video className="h-5 w-5 text-blue-600 mr-3" />
                <span>Private video calls</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                <span>24/7 chat support</span>
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                <span>Custom learning plan</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Group Masterclass</h3>
            <p className="text-gray-600 mb-6">
              Join our weekly group sessions where we analyze markets, discuss strategies, and share valuable trading insights.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <span>Live group sessions</span>
              </li>
              <li className="flex items-center">
                <Video className="h-5 w-5 text-blue-600 mr-3" />
                <span>Recorded sessions library</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                <span>Community chat access</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}