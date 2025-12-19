'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: 'Specialized Skills',
      desc: 'Expert workforce trained in diverse business processes',
      icon: '⚙️',
    },
    {
      title: 'Cost Reduction',
      desc: 'Optimize operational expenses while maintaining quality',
      icon: '💰',
    },
    {
      title: 'Scalability',
      desc: 'Flexible infrastructure that grows with your needs',
      icon: '📈',
    },
  ];

  const stats = [
    { label: 'Global Reach', value: '50+' },
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'Team Members', value: '5K+' },
    { label: 'Uptime %', value: '99.9%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'moveGrid 20s linear infinite',
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse" style={{
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse" style={{
          animation: 'float 8s ease-in-out infinite 2s',
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl' 
          : 'bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-lg border-b border-cyan-500/10'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://focusformarketing.com/images/logo.png" alt="FOCUS Logo" className="h-12 w-auto" />lassName="hidden md:block text-xs text-cyan-300 font-mono tracking-widest">INFRASTRUCTURE SOLUTIONS</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full hover:bg-cyan-500/20 transition-all animate-pulse">
            <span className="text-cyan-300 text-sm font-mono">⚡ Next-Gen BPO</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Enterprise BPO
            </span>
            <br />
            <span className="text-white">Infrastructure</span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your operations with cutting-edge BPO solutions. Specialized skills, cost reduction, and scalable infrastructure for competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 rounded-lg font-bold transition-all duration-300 hover:bg-cyan-500/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                <p className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-6 py-20 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-cyan-400 font-bold text-lg mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-cyan-400 font-bold text-lg mb-6">🌍 Offices</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="hover:translate-x-2 transition-transform duration-300">
                  <p className="font-semibold text-white">US Branch</p>
                  <p>1309 Coffeen Avenue, Sheridan, WY 82801</p>
                </div>
                <div className="hover:translate-x-2 transition-transform duration-300">
                  <p className="font-semibold text-white">Egypt Branch</p>
                  <p>1119 Villa Hoor, Cairo, Egypt 21445</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-cyan-400 font-bold text-lg mb-6">📞 Connect</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:+201123494147" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  <span className="font-semibold">Phone:</span> +20 112 349 4147
                </a>
                <a href="mailto:info@focusformarketing.com" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                  <span className="font-semibold">Email:</span> info@focusformarketing.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative z-10 px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto flex justify-center gap-6">
          {[
            { label: 'f', href: '#' },
            { label: 'in', href: '#' },
            { label: 'X', href: '#' },
          ].map((social, idx) => (
            <a key={idx} href={social.href} className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 flex items-center justify-center hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
              {social.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 py-8 px-6 text-center text-gray-400 text-sm">
        <p>© 2025 Focus For Marketing. Enterprise BPO Infrastructure Solutions.</p>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
