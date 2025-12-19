'use client';

import React, { useState } from 'react';

const page = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'PROFESSIONAL & CREATIVE DESIGN SOLUTION',
      description: 'Business Process Outsourcing (BPO) streamlines operations by delegating non-core tasks to external experts, enhancing efficiency and reducing costs while ensuring scalability and competitiveness in today\'s dynamic market.'
    },
    {
      title: 'SPECIALIZED SKILLS, COST REDUCTION, SCALABILITY, COMPETITIVE EDGE',
      description: 'BPO revolutionizes business operations by outsourcing non-core functions, driving efficiency, and cutting costs.'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-cyan-400">FOCUS</span>
          </div>
          <div className="text-white text-sm">FOR MARKETING SERVICES</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Slide content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {slides[activeSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              {slides[activeSlide].description}
            </p>
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-cyan-500/20 transition-all"
          >
            ←
          </button>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeSlide ? 'bg-cyan-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-cyan-500/20 transition-all"
          >
            →
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">CONTACT US</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="text-cyan-400 font-bold mb-4">ADDRESS</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold">US BRANCH</span><br/>
                1309 Coffeen Avenue STE 13289<br/>
                Sheridan Wyoming 82801
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">EGYPT BRANCH</span><br/>
                1119 Villa Hoor, El mokattam City<br/>
                Cairo, Egypt, 21445
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-cyan-400 font-bold mb-4">GET IN TOUCH</h3>
              <p className="text-gray-400 mb-3">
                <span className="font-semibold">Phone 01:</span><br/>
                <a href="tel:+201123494147" className="hover:text-cyan-400 transition">
                  +20 1123494147
                </a>
              </p>
              <p className="text-gray-400 mb-3">
                <span className="font-semibold">Phone 02:</span><br/>
                <a href="tel:+201123331369" className="hover:text-cyan-400 transition">
                  +20 1123331369
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Email:</span><br/>
                <a href="mailto:info@focusformarketing.com" className="hover:text-cyan-400 transition">
                  info@focusformarketing.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all">f</a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all">in</a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all">♪</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
