'use client';

import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

const callDetails = [
  { icon: Clock, text: '30 minutes' },
  { icon: Video, text: 'Google Meet / Zoom' },
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
    <section id="booking" className="py-28" style={{ background: '#0D0D10' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">Book a Call</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Get Your Free
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Strategy Call
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            30 minutes. No sales pitch. Just a real conversation about whether cold email
            can work for your business — and how.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — Call details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Call info */}
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-6">Call Details</h3>
              <div className="space-y-4">
                {callDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.text} className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
                      >
                        <Icon size={16} style={{ color: '#60A5FA' }} />
                      </div>
                      <span className="text-zinc-300 text-sm font-medium">{detail.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What to expect */}
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-5">What to Expect</h3>
              <div className="space-y-3">
                {whatToExpect.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Calendar embed */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                minHeight: '650px',
              }}
            >
              {/*
                TODO: Embed your Calendly / Cal.com / TidyCal widget here.

                OPTION A — Calendly inline widget:
                1. Go to Calendly → Event Types → your event → Embed
                2. Copy your Calendly URL (e.g. https://calendly.com/yourname/strategy-call)
                3. Uncomment the code below and replace YOUR_CALENDLY_URL

                <iframe
                  src="https://calendly.com/YOUR_CALENDLY_URL?embed_domain=accelerateb2b.com&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="w-full"
                />

                OPTION B — Cal.com:
                <iframe
                  src="https://cal.com/YOUR_USERNAME/strategy-call?embed=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="w-full"
                />
              */}

              {/* Placeholder shown until you embed your calendar */}
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-6 p-12 text-center"
                style={{ minHeight: '650px', background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2))',
                    border: '1px solid rgba(37,99,235,0.3)',
                  }}
                >
                  <Calendar size={36} style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl mb-2">Your Calendar Goes Here</p>
                  <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                    Embed your Calendly, Cal.com, or TidyCal booking widget here.
                    See the code comments above for instructions.
                  </p>
                </div>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}
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
