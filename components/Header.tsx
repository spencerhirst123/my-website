'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'What We Offer', href: '#offer' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={isScrolled ? {
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 1px 20px rgba(0,0,0,0.08)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient)' }}>
              <span className="text-white font-black text-sm">A</span>
            </div>
            <div>
              <span className="font-black text-lg tracking-tight" style={{ color: 'var(--text)' }}>Accelerate</span>
              <span className="font-black text-lg tracking-tight ml-1 gradient-text">B2B</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-alt)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ color: 'var(--text-3)', background: 'var(--bg-alt)', border: '1px solid var(--border)' }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href="#booking"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--gradient)', boxShadow: '0 4px 20px var(--accent-glow)' }}
            >
              Book a Call
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggle} className="p-2 rounded-lg" style={{ color: 'var(--text-3)' }} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="p-2 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: 'var(--text-3)' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium"
                style={{ color: 'var(--text-2)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'var(--gradient)' }}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
