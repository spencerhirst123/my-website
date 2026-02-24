'use client';

// TODO: Replace placeholder logos with your actual client logos
// Add your logo image files to /public/logos/ and update the list below

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
    <section className="py-20 border-y border-white/5" style={{ background: '#0D0D10' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Trusted By Growth-Focused Companies
          </p>
          <h2 className="text-3xl font-black text-white">Brands That Trust Us</h2>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-white/5 rounded-2xl overflow-hidden">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 group"
            >
              {client.logo ? (
                // Replace with: <img src={client.logo} alt={client.name} className="h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" />
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              ) : (
                // Placeholder shown until you add real logos
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-xl opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                  />
                  <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors font-medium">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sub-copy */}
        <p className="text-center text-zinc-600 text-sm mt-8">
          And many more companies across SaaS, agencies, consulting, and professional services.
        </p>
      </div>
    </section>
  );
}
