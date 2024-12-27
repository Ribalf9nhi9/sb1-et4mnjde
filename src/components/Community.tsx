import React from 'react';
import { MessageCircle, Users, Sparkles } from 'lucide-react';
import LikeButton from './LikeButton';

export default function Community() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-blue-900/95" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Trading Community</h2>
          <p className="text-xl text-blue-200">Connect with traders, share insights, and grow together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <Users className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-white font-semibold text-lg">Active Community</h3>
                <p className="text-blue-200">2,500+ traders online</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">24/7 Trading Discussion</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-100">Real-time Signal Alerts</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <LikeButton initialLikes={1234} />
              <a 
                href="#join"
                className="flex items-center gap-2 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Join Discord
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 animate-pulse">
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full" />
                  <div className="flex-1">
                    <div className="h-2 bg-blue-400/20 rounded w-1/3 mb-2" />
                    <div className="h-2 bg-blue-400/10 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}