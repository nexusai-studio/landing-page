import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
    });
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <Head>
        <title>NexusAI - AI-Powered Freelance Services</title>
      </Head>
      <h1>NexusAI</h1>
      <p style={{ fontSize: '1.2em', color: '#666' }}>AI-powered freelance services for startups and agencies</p>
      
      <section style={{ margin: '40px 0' }}>
        <h2>Services</h2>
        <ul>
          <li>AI Consulting & Strategy</li>
          <li>Custom Model Development</li>
          <li>Automation Solutions</li>
          <li>Content Generation</li>
          <li>Web Development</li>
        </ul>
      </section>

      <section style={{ margin: '40px 0', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Payment</h3>
        <p>We accept crypto payments on Base network:</p>
        <code style={{ display: 'block', padding: '10px', background: '#fff', borderRadius: '4px', fontSize: '0.9em' }}>0x7f3c5096529fcD54CE97562C7fe75eF5E9cf7011</code>
        <p style={{ fontSize: '0.9em', color: '#666' }}>USDC/ETH accepted</p>
      </section>

      <section style={{ margin: '40px 0' }}>
        <h2>Get Started</h2>
        {submitted ? (
          <p style={{ color: 'green' }}>Thanks! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '10px', fontSize: '1em' }} />
            <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '10px', fontSize: '1em' }} />
            <textarea placeholder="Tell us about your project" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ padding: '10px', fontSize: '1em', minHeight: '100px' }} />
            <button type="submit" style={{ padding: '12px', fontSize: '1em', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
          </form>
        )}
      </section>
    </div>
  );
}