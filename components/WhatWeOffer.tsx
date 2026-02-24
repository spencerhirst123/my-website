'use client';

import { Mail, Target, BarChart3, Zap, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: 'Cold Email Infrastructure',
    description:
      'We set up bulletproof sending infrastructure — domains, mailboxes, warming, and DNS — so your emails land in the inbox every time.',
    highlight: 'Inbox placement, not spam',
  },
  {
    icon: Target,
    title: 'ICP Research & List Building',
    description:
      'We identify your perfect-fit buyers and build hyper-targeted lists with verified contact data so every email goes to the right person.',
    highlight: 'Laser-targeted prospects',
  },
  {
    icon: Zap,
    title: 'Copywriting & Sequences',
    description:
      'Battle-tested email sequences written to get replies. We write, test, and optimise every line — subject lines, openers, CTAs.',
    highlight: 'Copy that converts',
  },
  {
    icon: BarChart3,
    title: 'Campaign Management',
    description:
      'We run your campaigns end-to-end — sending, inbox management, reply handling, and A/B testing to maximise meetings booked.',
    highlight: 'Fully done-for-you',
  },
  {
    icon: Users,
    title: 'Meeting Booking',
    description:
      'We handle all positive replies and book meetings directly onto your calendar. All you have to do is show up and close.',
    highlight: 'Meetings on autopilot',
  },
  {
    icon: Shield,
    title: 'Reporting & Optimisation',
    description:
      'Transparent reporting on every metric that matters — open rates, reply rates, meetings booked — with weekly optimisation sprints.',
    highlight: 'Data-driven results',
  },
];

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">What We Offer</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Everything You Need to
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fill Your Pipeline
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A complete cold email system, built and run by experts. No hiring, no training,
            no guesswork — just meetings on your calendar.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 hover-card group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <Icon size={22} style={{ color: '#60A5FA' }} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlight tag */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(37,99,235,0.08)',
                    border: '1px solid rgba(37,99,235,0.15)',
                    color: '#93C5FD',
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  {service.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#booking"
            className="btn-primary text-base inline-flex"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
