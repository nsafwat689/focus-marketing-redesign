export default function Home() {
  const features = [
    { title: 'Specialized Skills', desc: 'Expert workforce trained in diverse business processes', icon: '⚙️' },
    { title: 'Cost Reduction', desc: 'Optimize operational expenses while maintaining quality', icon: '💰' },
    { title: 'Scalability', desc: 'Flexible infrastructure that grows with your needs', icon: '📈' },
  ];

  const stats = [
    { label: 'Global Reach', value: '50+' },
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'Team Members', value: '5K+' },
    { label: 'Uptime %', value: '99.9%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'moveGrid 20s linear infinite'
      }}></div>

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-lg z-50 py-4 px-6 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg"></div>
            <span>FOCUS</span>
          </div>
          <div className="text-xs text-cyan-300 font-mono">INFRASTRUCTURE SOLUTIONS</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" style={{ animationDelay: '1s' }} className="animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full">
            <span className="text-cyan-300 text-sm font-mono">⚡ Next-Gen BPO</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Enterprise BPO</span>
            <br />
            <span className="text-white">Infrastructure</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your operations with cutting-edge BPO solutions. Specialized skills, cost reduction, and scalable infrastructure for competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-bold rounded-lg hover:bg-cyan-500/10 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-center hover:border-cyan-500/60 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{s.value}</div>
                <div className="text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl">
              <h3 className="text-cyan-400 font-bold text-lg mb-6 flex items-center gap-2"><span>🌍</span> Offices</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="font-semibold text-white">US Branch</p>
                  <p>1309 Coffeen Avenue, Sheridan, WY 82801</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Egypt Branch</p>
                  <p>1119 Villa Hoor, Cairo, Egypt 21445</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl">
              <h3 className="text-cyan-400 font-bold text-lg mb-6 flex items-center gap-2"><span>📞</span> Connect</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:+201123494147" className="block text-gray-300 hover:text-cyan-400 transition">
                  <span className="font-semibold">Phone:</span> +20 112 349 4147
                </a>
                <a href="mailto:info@focusformarketing.com" className="block text-gray-300 hover:text-cyan-400 transition">
                  <span className="font-semibold">Email:</span> info@focusformarketing.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/30 transition font-bold">f</a>
            <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/30 transition font-bold">in</a>
            <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/30 transition">X</a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-cyan-500/20 py-8 px-6 text-center text-gray-400 text-sm">
        <p>© 2025 Focus For Marketing. Enterprise BPO Infrastructure Solutions.</p>
      </footer>

      <style jsx>{`
        @keyframes moveGrid { 
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}
