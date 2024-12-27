import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Mentoring from './components/Mentoring';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Performance />
        <Testimonials />
        <Community />
        <Mentoring />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;