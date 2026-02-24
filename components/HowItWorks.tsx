'use client';

import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Strategy Call',
    description:
      'We jump on a call to understand your business, ICP, offer, and goals. We map out the exact strategy we\'ll use to get you meetings.',
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Infrastructure Setup',
    description:
      'We set up your sending domains, mailboxes, and technical configuration. Everything is warmed and verified before we send a single email.',
    duration: 'Days 2–7',
  },
  {
    number: '03',
    title: 'ICP & List Building',
    description:
      'We research and build your ideal prospect list using a combination of tools and manual verification. Only verified, relevant contacts.',
    duration: 'Days 7–10',
  },
  {
    number: '04',
    title: 'Copy & Sequences',
    description:
      'We write your email sequences — hooks, openers, body copy, and CTAs. We test multiple angles to find what resonates with your market.',
    duration: 'Days 10–14',
  },
  {
    number: '05',
    title: 'Launch & Manage',
    description:
      'Campaigns go live. We actively manage replies, handle objections, and book meetings onto your calendar. Ongoing A/B testing every week.',
    duration: 'Day 14+',
  },
  {
    number: '06',
    title: 'Scale & Optimise',
    description:
      'Once we find what\'s working, we scale up volume, expand to new segments, and continuously optimise for more meetings per send.',
    duration: 'Ongoing',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28"
      style={{ background: '#0D0D10' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">How It Works</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            From Onboarding to
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Meetings in 14 Days
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Our proven process gets your outbound machine running fast. Here&apos;s exactly
            what happens after you sign up.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-14 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), rgba(124,58,237,0.3), transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative glass-card rounded-2xl p-7 hover-card group">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))',
                      border: '1px solid rgba(37,99,235,0.3)',
                      color: '#93C5FD',
                    }}
                  >
                    {step.number}
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.2)',
                      color: '#86EFAC',
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow for non-last items */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-end mt-5">
                    <ArrowRight size={16} className="text-zinc-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))',
            border: '1px solid rgba(37,99,235,0.15)',
          }}
        >
          <p className="text-zinc-300 text-lg font-semibold mb-2">
            Ready to see this in action?
          </p>
          <p className="text-zinc-500 text-sm mb-6">
            Book a free strategy call and we&apos;ll show you exactly how we&apos;d approach your market.
          </p>
          <a
            href="#booking"
            className="btn-primary inline-flex"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
            }}
          >
            Start in 14 Days <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
