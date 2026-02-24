'use client';

import { Youtube, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const achievements = [
  { value: '5+ Years', label: 'In Cold Email' },
  { value: '50+ Clients', label: 'Served Globally' },
  { value: '3,000+', label: 'Meetings Booked' },
  { value: '10K+', label: 'YouTube Subscribers' },
];

const socials = [
  { icon: Youtube,  label: 'YouTube',    href: 'https://www.youtube.com/@AccelerateB2B', color: '#FF0000' },
  { icon: Twitter,  label: 'Twitter / X', href: '#',                                      color: '#1DA1F2' },
  { icon: Linkedin, label: 'LinkedIn',    href: '#',                                      color: '#0077B5' },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-5 w-fit">About Me</div>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: 'var(--text)' }}>
            Who&apos;s Behind{' '}
            <span className="gradient-text">Accelerate B2B?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo & stats */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="relative">
              <div
                className="w-64 h-64 rounded-3xl overflow-hidden"
                style={{ border: '2px solid var(--border-accent)', boxShadow: '0 30px 80px var(--accent-glow)' }}
              >
                {/* TODO: Replace with your actual photo */}
                {/* <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: 'var(--accent-subtle)' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white"
                    style={{ background: 'var(--gradient)' }}
                  >
                    S {/* TODO: Replace with your initial */}
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-3)' }}>Add your photo</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl"
                style={{ background: 'var(--gradient)', boxShadow: '0 10px 30px var(--accent-glow)' }}
              >
                <span className="text-white text-xs font-bold">Founder & CEO</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {achievements.map((a) => (
                <div key={a.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-black mb-1 gradient-text">{a.value}</div>
                  <div className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>{a.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            {/* TODO: Replace with your real name */}
            <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--text)' }}>Spencer [Your Last Name]</h3>
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--text-3)' }}>Founder of Accelerate B2B</p>

            {/* TODO: Replace with your actual bio */}
            <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: 'var(--text-3)' }}>
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

            <div className="flex flex-wrap gap-3 mb-8">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ color: 'var(--text-2)', background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={16} style={{ color: social.color }} />
                    {social.label}
                  </a>
                );
              })}
            </div>

            <a href="#booking" className="btn-primary inline-flex">
              Work With Me <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
