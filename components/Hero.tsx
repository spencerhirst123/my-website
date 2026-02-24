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
      {/* Subtle background glow — orange tint */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-subtle) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Cold Email Agency — Currently Accepting Clients
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight" style={{ color: 'var(--text)' }}>
            We Fill Your Calendar
            <br />
            <span className="gradient-text">With Qualified Meetings.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-3)' }}>
          We build and run cold email outbound systems that generate predictable pipeline
          for B2B companies. You focus on closing — we handle the rest.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#booking" className="btn-primary text-base">
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
            <div key={point} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-3)' }}>
              <CheckCircle size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              {point}
            </div>
          ))}
        </div>

        {/* VSL Video */}
        <div className="relative max-w-4xl mx-auto">
          {/* Orange glow behind video */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'var(--gradient)',
              filter: 'blur(50px)',
              transform: 'scale(0.9)',
              opacity: 0.15,
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border)', boxShadow: '0 40px 100px rgba(0,0,0,0.2)' }}
          >
            {/* TODO: Replace the section below with your actual VSL embed */}
            {/* Option A — Loom: src="https://www.loom.com/embed/YOUR_VIDEO_ID" */}
            {/* Option B — YouTube: src="https://www.youtube.com/embed/YOUR_VIDEO_ID" */}
            {/* Option C — Vimeo: src="https://player.vimeo.com/video/YOUR_VIDEO_ID" */}

            <div
              className="relative w-full flex flex-col items-center justify-center gap-5"
              style={{ aspectRatio: '16/9', background: 'var(--bg-alt)' }}
            >
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, var(--accent-subtle), transparent)' }}
              />

              {/* Play button */}
              <div className="relative group cursor-pointer">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--gradient)', boxShadow: '0 0 50px var(--accent-glow)' }}
                >
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ background: 'var(--accent)' }}
                />
              </div>

              <div className="relative text-center">
                <p className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Your VSL Goes Here</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-3)' }}>
                  Replace this placeholder with your Loom, YouTube, or Vimeo embed
                </p>
              </div>
            </div>

            {/*
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
              <div className="text-3xl font-black mb-1 gradient-text">{stat.value}</div>
              <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
