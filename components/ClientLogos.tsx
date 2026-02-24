'use client';

// TODO: Replace placeholder logos with your actual client logos
// Add logo files to /public/logos/ and update the array below
const clients = [
  { name: 'Client One', logo: null },
  { name: 'Client Two', logo: null },
  { name: 'Client Three', logo: null },
  { name: 'Client Four', logo: null },
  { name: 'Client Five', logo: null },
  { name: 'Client Six', logo: null },
  { name: 'Client Seven', logo: null },
  { name: 'Client Eight', logo: null },
];

export default function ClientLogos() {
  return (
    <section className="py-20 section-alt" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-3)' }}>
            Trusted By Growth-Focused Companies
          </p>
          <h2 className="text-3xl font-black" style={{ color: 'var(--text)' }}>Brands That Trust Us</h2>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-8 transition-colors duration-300 group"
              style={{ background: 'var(--bg-card)', borderRight: i % 4 !== 3 ? '1px solid var(--border)' : 'none', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-xl opacity-20 group-hover:opacity-50 transition-opacity"
                    style={{ background: 'var(--gradient)' }}
                  />
                  <span className="text-xs font-medium transition-colors" style={{ color: 'var(--text-3)' }}>
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: 'var(--text-3)' }}>
          And many more companies across SaaS, agencies, consulting, and professional services.
        </p>
      </div>
    </section>
  );
}
