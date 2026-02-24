'use client';

import { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare } from 'lucide-react';

export default function GeneralInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', revenue: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    /*
      TODO: Wire up your form submission here.
      A) Formspree: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      B) Next.js API route: create app/api/contact/route.ts
      C) Resend / EmailJS / Mailchimp
    */
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">
            <MessageSquare size={12} />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight" style={{ color: 'var(--text)' }}>
            Have a Question?
            <br />
            <span className="gradient-text">Let&apos;s Talk</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-3)' }}>
            Not ready to book a call yet? Send us a message and we&apos;ll get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
              >
                <Mail size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text)' }}>Prefer Email?</h3>
              {/* TODO: Replace with your actual email */}
              <a
                href="mailto:hello@accelerateb2b.com"
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--accent)' }}
              >
                hello@accelerateb2b.com
              </a>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--text-3)' }}>
                We respond to every inquiry within 24 business hours.
              </p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>Faster option?</p>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--text-3)' }}>
                Skip the form and book a call directly. It&apos;s free and you&apos;ll get answers faster.
              </p>
              <a
                href="#booking"
                className="block text-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white"
                style={{ background: 'var(--gradient)' }}
              >
                Book a Free Call Instead
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center" style={{ minHeight: '400px' }}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
                >
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text)' }}>Message Sent!</h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-3)' }}>
                  Thanks for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Your Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Work Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className="input-field" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Monthly Revenue</label>
                    <select name="revenue" value={form.revenue} onChange={handleChange} className="input-field">
                      <option value="" disabled>Select range</option>
                      <option value="under-10k">Under $10K/mo</option>
                      <option value="10k-50k">$10K – $50K/mo</option>
                      <option value="50k-200k">$50K – $200K/mo</option>
                      <option value="200k-plus">$200K+/mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us about your business, your ideal customer, and what you're hoping to achieve with cold email..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ background: 'var(--gradient)', boxShadow: '0 8px 32px var(--accent-glow)' }}
                >
                  {loading ? (
                    <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending...</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
