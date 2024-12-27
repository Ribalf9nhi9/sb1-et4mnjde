import React from 'react';
import { LineChart, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <LineChart className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">TradePro Signals</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#performance" className="text-gray-700 hover:text-blue-600">Performance</a>
          <a href="#mentoring" className="text-gray-700 hover:text-blue-600">Mentoring</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#performance" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Performance</a>
            <a href="#mentoring" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mentoring</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</a>
            <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}