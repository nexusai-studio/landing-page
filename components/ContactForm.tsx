'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Get Started</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Tell us about your project"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
        </button>
        {status === 'success' && <p className="text-green-400 text-center">Thanks! We'll be in touch soon.</p>}
        {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}