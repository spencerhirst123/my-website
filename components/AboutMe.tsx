'use client';

import { Youtube, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const achievements = [
  { value: '5+ Years', label: 'In Cold Email' },
  { value: '50+ Clients', label: 'Served Globally' },
  { value: '3,000+', label: 'Meetings Booked' },
  { value: '10K+', label: 'YouTube Subscribers' },
];

const socials = [
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@AccelerateB2B', color: '#FF0000' },
  { icon: Twitter, label: 'Twitter / X', href: '#', color: '#1DA1F2' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0077B5' },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-5 w-fit">About Me</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Who&apos;s Behind
            <span
              className="ml-3"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Accelerate B2B?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo & stats */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Profile photo placeholder */}
            <div className="relative">
              <div
                className="w-64 h-64 rounded-3xl overflow-hidden"
                style={{
                  border: '2px solid rgba(37,99,235,0.3)',
                  boxShadow: '0 30px 80px rgba(37,99,235,0.2)',
                }}
              >
                {/* TODO: Replace with your actual photo */}
                {/* <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                  >
                    {/* TODO: Replace initial with yours */}
                    S
                  </div>
                  <span className="text-zinc-500 text-xs">Add your photo</span>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  boxShadow: '0 10px 30px rgba(37,99,235,0.4)',
                }}
              >
                <span className="text-white text-xs font-bold">Founder & CEO</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {a.value}
                  </div>
                  <div className="text-zinc-500 text-xs font-medium">{a.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            {/* TODO: Replace with your real name */}
            <h3 className="text-3xl font-black text-white mb-2">Spencer [Your Last Name]</h3>
            <p className="text-zinc-500 text-sm font-medium mb-6">Founder of Accelerate B2B</p>

            {/* TODO: Replace with your actual bio */}
            <div className="space-y-4 text-zinc-400 text-base leading-relaxed mb-8">
              <p>
                I&apos;ve been obsessed with cold email since [YEAR]. What started as a way to grow
                my own business turned into a full-blown agency after I realized how few companies
                were actually doing outbound well.
              </p>
              <p>
                Over the past [X] years I&apos;ve helped [50+] B2B companies across SaaS, agencies,
                consulting, and professional services build predictable outbound systems. My clients
                collectively generate hundreds of qualified meetings every month.
              </p>
              <p>
                I also document everything I learn on YouTube — zero fluff, just what actually works
                in the trenches today. If you want to see my thinking, check the channel.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <Icon size={16} style={{ color: social.color }} />
                    {social.label}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="btn-primary inline-flex"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
              }}
            >
              Work With Me <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
