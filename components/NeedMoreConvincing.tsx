'use client';

import { Star, Quote, TrendingUp, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'CEO, SaaS Company',
    company: 'TechCorp',
    quote:
      'Within 60 days of working with Accelerate B2B, we had 14 qualified meetings with enterprise companies we never would have reached otherwise. The ROI is insane.',
    result: '14 meetings in 60 days',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Sales, Agency',
    company: 'Growth Agency',
    quote:
      'I\'ve tried in-house SDRs, LinkedIn outreach, paid ads — nothing comes close to what cold email does for our pipeline. These guys know what they\'re doing.',
    result: '3x pipeline in 90 days',
    stars: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, Consulting Firm',
    company: 'Rodriguez Consulting',
    quote:
      'Skeptical at first, but the results shut me up fast. 8 meetings in the first month, closed 2 of them. The system basically pays for itself.',
    result: '2 clients from month 1',
    stars: 5,
  },
];

const guarantees = [
  {
    title: 'Meetings or Your Money Back',
    description:
      'If we don\'t book you a minimum number of qualified meetings in your first 60 days, we work for free until we do.',
  },
  {
    title: 'No Lock-In Contracts',
    description:
      'Month-to-month agreements. Stay because results are great, not because you\'re locked in.',
  },
  {
    title: 'Full Transparency',
    description:
      'You own everything — all assets, lists, domains, and copy. No black boxes, no hidden work.',
  },
];

export default function NeedMoreConvincing() {
  return (
    <section id="convincing" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">Need More Convincing?</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Don&apos;t Take
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Word For It
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Real results from real clients. Here&apos;s what happens when you let us take
            over your outbound.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 hover-card relative">
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: '#2563EB' }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold mb-5"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  color: '#86EFAC',
                }}
              >
                <TrendingUp size={12} />
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(124,58,237,0.06))',
            border: '1px solid rgba(37,99,235,0.12)',
          }}
        >
          <h3 className="text-white font-black text-2xl text-center mb-8">Our Guarantees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
                  }}
                >
                  <span className="text-white font-black text-sm">{i + 1}</span>
                </div>
                <h4 className="text-white font-bold mb-2">{g.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-zinc-400 mb-6 text-lg">
            Still on the fence? Let&apos;s talk — the call is free and there&apos;s zero obligation.
          </p>
          <a
            href="#booking"
            className="btn-primary inline-flex text-base"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
            }}
          >
            Book My Free Call <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
