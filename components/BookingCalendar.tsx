'use client';

import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

const callDetails = [
  { icon: Clock,    text: '30 minutes' },
  { icon: Video,    text: 'Google Meet / Zoom' },
  { icon: Calendar, text: 'Free — no obligation' },
];

const whatToExpect = [
  'We audit your current outbound setup (or lack of one)',
  'We map out an exact strategy for your market and ICP',
  'You get a realistic pipeline forecast',
  'No sales pressure — pure value call',
];

export default function BookingCalendar() {
  return (
    <section id="booking" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">Book a Call</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: 'var(--text)' }}>
            Get Your Free
            <br />
            <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-3)' }}>
            30 minutes. No sales pitch. Just a real conversation about whether cold email
            can work for your business — and how.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--text)' }}>Call Details</h3>
              <div className="space-y-4">
                {callDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.text} className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
                      >
                        <Icon size={16} style={{ color: 'var(--accent)' }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-2)' }}>{detail.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--text)' }}>What to Expect</h3>
              <div className="space-y-3">
                {whatToExpect.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Calendar embed */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', boxShadow: '0 30px 80px rgba(0,0,0,0.1)', minHeight: '650px' }}
            >
              {/*
                TODO: Embed your Calendly / Cal.com / TidyCal widget here.

                OPTION A — Calendly:
                <iframe
                  src="https://calendly.com/YOUR_CALENDLY_URL?embed_domain=accelerateb2b.com&embed_type=Inline"
                  width="100%" height="700" frameBorder="0" className="w-full"
                />

                OPTION B — Cal.com:
                <iframe
                  src="https://cal.com/YOUR_USERNAME/strategy-call?embed=true"
                  width="100%" height="700" frameBorder="0" className="w-full"
                />
              */}

              {/* Placeholder */}
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-6 p-12 text-center"
                style={{ minHeight: '650px', background: 'var(--bg-card)' }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
                >
                  <Calendar size={36} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-bold text-xl mb-2" style={{ color: 'var(--text)' }}>Your Calendar Goes Here</p>
                  <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>
                    Embed your Calendly, Cal.com, or TidyCal booking widget here. See the code comments above for instructions.
                  </p>
                </div>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--gradient)' }}
                >
                  Set Up Calendly Free →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
