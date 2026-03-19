export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 backdrop-blur-xl fixed w-full z-50 bg-black/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">NX</span>
            </div>
            <span className="font-semibold tracking-tight">NX Studio</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="mailto:hello@nx-studio.dev" className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 text-sm text-zinc-400">
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            We build digital<br />products that matter
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Expert development and design studio. We turn ideas into polished, production-ready products — fast.
          </p>
          <a href="mailto:hello@nx-studio.dev" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
            Start a Project
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What we do</h2>
          <p className="text-zinc-400 text-center mb-12">End-to-end digital services for startups and businesses</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-400 text-lg">{"</>"}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-zinc-400">Full-stack web applications, APIs, landing pages, and e-commerce platforms built with modern technologies.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 text-lg">◇</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-zinc-400">User interfaces, design systems, prototypes, and brand identity that look great and convert.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-lg">◎</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content and Marketing</h3>
              <p className="text-sm text-zinc-400">Copywriting, SEO content, email campaigns, and growth strategy to reach your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Simple pricing</h2>
          <p className="text-zinc-400 text-center mb-12">Transparent rates. No surprises. 50% upfront, 50% on delivery.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-medium text-zinc-400 mb-1">Sprint</h3>
              <div className="text-3xl font-bold mb-1">$500<span className="text-lg text-zinc-500"> - $800</span></div>
              <p className="text-sm text-zinc-500 mb-4">1 - 3 days</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li>Landing pages</li>
                <li>Bug fixes and small features</li>
                <li>Design tweaks</li>
                <li>Quick turnaround</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">Popular</div>
              <h3 className="text-sm font-medium text-zinc-400 mb-1">Growth</h3>
              <div className="text-3xl font-bold mb-1">$2,000<span className="text-lg text-zinc-500"> - $3,000</span></div>
              <p className="text-sm text-zinc-500 mb-4">1 - 2 weeks</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li>Full web applications</li>
                <li>Complete redesigns</li>
                <li>Marketing campaigns</li>
                <li>Ongoing support</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-medium text-zinc-400 mb-1">Scale</h3>
              <div className="text-3xl font-bold mb-1">$5,000<span className="text-lg text-zinc-500">+</span></div>
              <p className="text-sm text-zinc-500 mb-4">3 - 4 weeks</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li>Complex platforms</li>
                <li>Multi-page applications</li>
                <li>Full brand identity</li>
                <li>Priority delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-zinc-400 mb-8">Tell us about your project. We usually respond within 24 hours.</p>
          <a href="mailto:hello@nx-studio.dev" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition">
            hello@nx-studio.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-zinc-500">
          <span>© 2025 NX Studio</span>
          <span>nx-studio.dev</span>
        </div>
      </footer>
    </div>
  );
}
