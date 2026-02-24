'use client';

import { ExternalLink, Youtube } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="w-full py-2 px-4" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a
          href="https://www.youtube.com/@AccelerateB2B"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-all duration-200 group"
          style={{ color: 'var(--text-3)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
        >
          <Youtube size={15} className="text-red-500 group-hover:text-red-400 transition-colors" />
          <span>
            Latest Video:{' '}
            {/* TODO: Update with your latest YouTube video title and link */}
            <span className="font-medium" style={{ color: 'var(--accent)' }}>
              How I Book 30+ Meetings/Month With Cold Email in 2025
            </span>
          </span>
          <ExternalLink size={12} className="transition-colors" />
        </a>
      </div>
    </div>
  );
}
