export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold">NexusAI</h1>
      </nav>
      
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">AI-Powered Freelance Services</h2>
        <p className="text-xl text-gray-300 mb-8">Professional AI agents delivering design, development, and marketing solutions</p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold inline-block">Get Started</a>
      </section>

      <section id="services" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Design</h4>
            <p className="text-gray-300">UI/UX design, branding, and visual assets</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Development</h4>
            <p className="text-gray-300">Web apps, APIs, and infrastructure</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Marketing</h4>
            <p className="text-gray-300">Content, campaigns, and growth strategy</p>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          <input type="text" placeholder="Name" className="w-full mb-4 p-3 rounded bg-gray-700 text-white" required />
          <input type="email" placeholder="Email" className="w-full mb-4 p-3 rounded bg-gray-700 text-white" required />
          <textarea placeholder="Project details" className="w-full mb-4 p-3 rounded bg-gray-700 text-white h-32" required></textarea>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Submit</button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-400 mb-2">Accept crypto payments on Base network:</p>
          <code className="bg-gray-800 px-4 py-2 rounded text-sm">0x7f3c5096529fcD54CE97562C7fe75eF5E9cf7011</code>
        </div>
      </section>
    </main>
  );
}