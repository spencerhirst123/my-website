'use client';

import { Youtube, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const navSections = [
  { title: 'Company',      links: [{ label: 'About', href: '#about' }, { label: 'What We Offer', href: '#offer' }, { label: 'How It Works', href: '#how-it-works' }, { label: 'FAQ', href: '#faq' }] },
  { title: 'Work With Us', links: [{ label: 'Book a Strategy Call', href: '#booking' }, { label: 'General Inquiry', href: '#inquiry' }, { label: 'Client Portal', href: '#' }, { label: 'Referral Program', href: '#' }] },
  { title: 'Content',      links: [{ label: 'YouTube Channel', href: 'https://www.youtube.com/@AccelerateB2B' }, { label: 'Cold Email Blog', href: '#' }, { label: 'Case Studies', href: '#' }, { label: 'Free Resources', href: '#' }] },
];

const socials = [
  { icon: Youtube,  href: 'https://www.youtube.com/@AccelerateB2B', label: 'YouTube',  color: '#FF0000' },
  { icon: Twitter,  href: '#',                                       label: 'Twitter',  color: '#1DA1F2' },
  { icon: Linkedin, href: '#',                                       label: 'LinkedIn', color: '#0077B5' },
  { icon: Mail,     href: 'mailto:hello@accelerateb2b.com',          label: 'Email',    color: '#F97316' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      {/* CTA Banner */}
      <div className="py-16" style={{ background: 'var(--accent-subtle)', borderBottom: '1px solid var(--border-accent)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text)' }}>
            Ready to Fill Your Calendar?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-3)' }}>
            Book your free strategy call today. 30 minutes, zero obligation,
            and you&apos;ll walk away with a clear outbound plan.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'var(--gradient)', boxShadow: '0 12px 40px var(--accent-glow)' }}
          >
            Book My Free Strategy Call
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 w-fit">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient)' }}>
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="font-black text-lg tracking-tight" style={{ color: 'var(--text)' }}>
                Accelerate <span className="gradient-text">B2B</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--text-3)' }}>
              We build and run cold email outbound systems that generate predictable pipeline
              for B2B companies. You close, we fill the calendar.
            </p>

            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={16} style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--text)' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-3)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Accelerate B2B. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
