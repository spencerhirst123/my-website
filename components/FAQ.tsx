'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to see results?',
    answer:
      'Most clients start seeing replies and booked meetings within 2–3 weeks of launch. We typically aim to have your full system live within 14 days of onboarding. Results scale significantly after the first 60–90 days as we optimise campaigns based on real data.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work best with B2B companies — SaaS, agencies, consulting firms, professional services, and tech companies. If you sell something high-ticket to businesses and have a defined ICP, cold email is likely a great channel for you. We\'ll tell you honestly on the strategy call if it\'s not a good fit.',
  },
  {
    question: 'Do I need to do anything, or is it fully done-for-you?',
    answer:
      'Almost fully done-for-you. We handle the infrastructure, list building, copywriting, campaign management, and reply handling. All you need to do is show up to meetings. We\'ll need about 1 hour from you during onboarding and then a weekly 15-minute check-in if you want it.',
  },
  {
    question: 'How many emails do you send per month?',
    answer:
      'It depends on your target market size and package, but typically between 2,000–10,000 emails per month. We prioritise quality and inbox placement over raw volume — a well-placed email beats a spam-folder blast every time.',
  },
  {
    question: 'What happens if I get spam complaints or blacklisted?',
    answer:
      'We proactively manage deliverability. We use separate sending domains (not your main domain), monitor blacklists daily, honour unsubscribes immediately, and keep sending volumes within safe limits. In 5+ years, we\'ve never had a client\'s main domain blacklisted.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Our pricing depends on your volume requirements and market. We don\'t publish fixed pricing because every engagement is different. Book a strategy call and we\'ll give you an exact quote. Most clients see positive ROI within their first 30–60 days.',
  },
  {
    question: 'What if cold email doesn\'t work for my business?',
    answer:
      'We\'ll tell you before we start. During the strategy call, we\'ll honestly assess whether cold email is a good fit for your offer, ICP, and market. If we don\'t think it\'ll work, we\'ll say so — we\'d rather not take your money than deliver poor results.',
  },
  {
    question: 'Do you provide any guarantees?',
    answer:
      'Yes. We guarantee a minimum number of qualified meetings within your first 60 days, or we work for free until we deliver. We also offer month-to-month contracts — no long-term lock-ins. If you\'re not happy, you can leave at any time.',
  },
  {
    question: 'Will cold email damage my brand or reputation?',
    answer:
      'Done correctly, no. We write professional, personalised emails that provide value — not spammy blast messages. Our approach is conversational and non-aggressive. We also handle all replies, so negative responses are managed professionally and immediately.',
  },
  {
    question: 'How do I know the meetings will be qualified?',
    answer:
      'We only book meetings with prospects who match your ICP criteria and have expressed genuine interest in a conversation. We pre-qualify during the reply handling process and only push meetings onto your calendar that meet your definition of "qualified."',
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-b last:border-b-0 transition-all duration-200"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-blue-400' : 'text-zinc-600 group-hover:text-zinc-400'
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mx-auto mb-5 w-fit">FAQ</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Frequently Asked
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Everything you need to know before getting started. Can&apos;t find your answer?
            Just book a call and ask us directly.
          </p>
        </div>

        {/* FAQ columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl px-7 py-2">
            {faqs.slice(0, 5).map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="glass-card rounded-2xl px-7 py-2">
            {faqs.slice(5).map((faq, i) => (
              <FAQItem
                key={i + 5}
                faq={faq}
                isOpen={openIndex === i + 5}
                onClick={() => setOpenIndex(openIndex === i + 5 ? null : i + 5)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm mb-4">Still have questions?</p>
          <a
            href="#inquiry"
            className="text-blue-400 hover:text-blue-300 font-semibold text-sm underline underline-offset-2 transition-colors"
          >
            Send us a message →
          </a>
        </div>
      </div>
    </section>
  );
}
