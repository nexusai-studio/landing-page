import Link from "next/link";
import React from "react";

export default function NXStudioPage() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/20 selection:text-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-xs tracking-tighter">NX</span>
            </div>
            <span className="font-semibold tracking-tight text-sm">NX Studio</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link 
              href="mailto:hello@nx-studio.dev" 
              className="text-white hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-16 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Expert Digital Studio. <br className="hidden sm:block" />
            Built for Scale.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            We architect and deliver premium digital experiences. Uncompromising quality 
            meets relentless execution speed to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="mailto:hello@nx-studio.dev"
              className="h-12 px-8 rounded-full bg-white text-black font-medium inline-flex items-center justify-center hover:bg-zinc-200 transition-colors"
            >
              Start a project
            </Link>
            <Link 
              href="#services"
              className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium inline-flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              View our services
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Expertise</h2>
            <p className="text-zinc-400">Specialized disciplines to build complete digital solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                High-performance, scalable web applications built with modern frameworks. 
                Optimized for speed, accessibility, and robust functionality.
              </p>
            </div>
            {/* Service 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold