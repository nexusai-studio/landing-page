'use client';

export default function ServiceTiers() {
  const tiers = [
    { name: 'Sprint', price: '$5K', features: ['AI Content Writing', 'Landing Page Build', '2-week delivery'] },
    { name: 'Growth', price: '$15K', features: ['Full Web App MVP', 'AI Integration', 'Custom Automation', '4-week delivery'] },
    { name: 'Scale', price: '$30K+', features: ['Enterprise AI Solutions', 'Multi-agent Systems', 'Ongoing Support', 'Custom timeline'] }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div key={tier.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition">
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <p className="text-3xl font-bold text-blue-400 mb-4">{tier.price}</p>
          <ul className="space-y-2">
            {tier.features.map((feature, i) => (
              <li key={i} className="text-gray-300">✓ {feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}