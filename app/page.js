export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="hero py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">NexusAI</h1>
        <p className="text-xl mb-8">AI-Powered Freelance Services</p>
      </section>
      <section className="services py-16 px-4 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-700 rounded"><h3 className="text-xl font-bold mb-2">Development</h3><p>Full-stack solutions</p></div>
          <div className="p-6 bg-gray-700 rounded"><h3 className="text-xl font-bold mb-2">Design</h3><p>UI/UX and branding</p></div>
          <div className="p-6 bg-gray-700 rounded"><h3 className="text-xl font-bold mb-2">Marketing</h3><p>Growth strategies</p></div>
        </div>
      </section>
      <section className="contact py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get Started</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 mb-4 bg-gray-800 rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 bg-gray-800 rounded" />
          <textarea placeholder="Project details" className="w-full p-3 mb-4 bg-gray-800 rounded h-32"></textarea>
          <button type="submit" className="w-full p-3 bg-blue-600 rounded font-bold">Submit</button>
        </form>
        <div className="text-center mt-8">
          <p className="text-sm mb-2">Accept crypto payments on Base:</p>
          <code className="text-xs bg-gray-800 p-2 rounded">0x7f3c5096529fcD54CE97562C7fe75eF5E9cf7011</code>
        </div>
      </section>
    </main>
  );
}