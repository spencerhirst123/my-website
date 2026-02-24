'use client';

import { ExternalLink, Youtube } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-dark-2 border-b border-white/5 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a
          href="https://www.youtube.com/@AccelerateB2B"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
        >
          <Youtube size={15} className="text-red-500 group-hover:text-red-400 transition-colors" />
          <span>
            Latest Video:{' '}
            <span className="text-zinc-300 font-medium underline underline-offset-2 decoration-zinc-600 group-hover:decoration-zinc-400 transition-colors">
              {/* TODO: Update with your latest YouTube video title and link */}
              How I Book 30+ Meetings/Month With Cold Email in 2025
            </span>
          </span>
          <ExternalLink size={12} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </a>
      </div>
    </div>
  );
}
