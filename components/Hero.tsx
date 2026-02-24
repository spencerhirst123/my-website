'use client';

import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const trustPoints = [
  'No retainers, pay for results',
  'Done-for-you setup & management',
  'Qualified meetings, not just leads',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, rgba(124,58,237,0.08) 60%, transparent 100%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0 L0 0 0 60' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Cold Email Agency — Currently Accepting Clients
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            <span className="text-white">We Fill Your Calendar</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              With Qualified Meetings.
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-zinc-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We build and run cold email outbound systems that generate predictable pipeline
          for B2B companies. You focus on closing — we handle the rest.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#booking"
            className="btn-primary text-base"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
            }}
          >
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a href="#offer" className="btn-secondary text-base">
            See What We Do
          </a>
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm text-zinc-400">
              <CheckCircle size={15} className="text-blue-500 flex-shrink-0" />
              {point}
            </div>
          ))}
        </div>

        {/* VSL Video */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow behind video */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2))',
              filter: 'blur(40px)',
              transform: 'scale(0.95)',
            }}
          />

          {/* Video container */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            }}
          >
            {/* TODO: Replace the src below with your actual VSL embed URL */}
            {/* Option A — Loom: https://www.loom.com/embed/YOUR_VIDEO_ID */}
            {/* Option B — YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            {/* Option C — Vimeo: https://player.vimeo.com/video/YOUR_VIDEO_ID */}

            {/* Placeholder shown until you add your VSL */}
            <div
              className="relative w-full bg-brand-dark-3 flex flex-col items-center justify-center gap-5"
              style={{ aspectRatio: '16/9' }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.08), transparent)',
                }}
              />

              {/* Play button */}
              <div className="relative group cursor-pointer">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    boxShadow: '0 0 50px rgba(37,99,235,0.4)',
                  }}
                >
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ background: 'rgba(37,99,235,0.5)' }}
                />
              </div>

              <div className="relative text-center">
                <p className="text-zinc-300 font-semibold text-lg">Your VSL Goes Here</p>
                <p className="text-zinc-500 text-sm mt-1">
                  Replace this placeholder with your Loom, YouTube, or Vimeo embed
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-10"
                   style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }} />
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full opacity-5"
                   style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }} />
            </div>

            {/* Uncomment below and paste your embed URL to use a real video:
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="YOUR_VIDEO_EMBED_URL_HERE"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            */}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '50+', label: 'Clients Served' },
            { value: '3,000+', label: 'Meetings Booked' },
            { value: '98%', label: 'Client Retention' },
            { value: '$0', label: 'Setup Fee' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
