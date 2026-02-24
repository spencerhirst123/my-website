'use client';

import { Youtube, ExternalLink, Play } from 'lucide-react';

// TODO: Replace VIDEO_ID_N with your actual YouTube video IDs
const videos = [
  { id: 'VIDEO_ID_1', title: 'How I Book 30+ Meetings/Month With Cold Email in 2025',                views: '12K views', duration: '18:42' },
  { id: 'VIDEO_ID_2', title: 'The Cold Email Setup That Gets 8% Reply Rates (Full Breakdown)',       views: '9.4K views', duration: '22:15' },
  { id: 'VIDEO_ID_3', title: 'Why 95% of Cold Emails Fail (And How to Fix Yours)',                  views: '8.1K views', duration: '14:30' },
  { id: 'VIDEO_ID_4', title: 'Cold Email Copywriting Masterclass — Write Emails That Get Replies',  views: '15K views', duration: '31:05' },
  { id: 'VIDEO_ID_5', title: 'My Exact Cold Email Tech Stack (Cheapest Setup That Works)',           views: '7.8K views', duration: '19:22' },
  { id: 'VIDEO_ID_6', title: 'How to Build a B2B Lead List in 2025 (Step by Step)',                 views: '11K views', duration: '25:48' },
];

function VideoCard({ video }: { video: { id: string; title: string; views: string; duration: string } }) {
  const isPlaceholder = video.id.startsWith('VIDEO_ID');
  const thumbnailUrl = isPlaceholder ? null : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <a
      href={isPlaceholder ? '#youtube' : `https://youtube.com/watch?v=${video.id}`}
      target={isPlaceholder ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="group block glass-card rounded-2xl overflow-hidden hover-card"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--accent-subtle)' }}>
            <Youtube size={40} style={{ color: 'var(--border)' }} />
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'rgba(255,0,0,0.9)', boxShadow: '0 8px 30px rgba(255,0,0,0.4)' }}
          >
            <Play size={20} className="text-white ml-0.5" fill="white" />
          </div>
        </div>

        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
          {video.duration}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="text-sm font-semibold leading-snug mb-2 line-clamp-2 transition-colors duration-200"
          style={{ color: 'var(--text)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
        >
          {video.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{video.views}</span>
          <ExternalLink size={12} style={{ color: 'var(--border)' }} className="group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </a>
  );
}

export default function YouTubeVideos() {
  return (
    <section id="youtube" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <div className="badge mb-4 w-fit">
              <Youtube size={12} className="text-red-500" />
              YouTube Channel
            </div>
            <h2 className="text-4xl font-black" style={{ color: 'var(--text)' }}>
              Free Cold Email <span className="gradient-text">Training</span>
            </h2>
            <p className="text-base mt-2" style={{ color: 'var(--text-3)' }}>No fluff. Just what actually works in outbound today.</p>
          </div>

          <a
            href="https://www.youtube.com/@AccelerateB2B"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#dc2626' }}
          >
            <Youtube size={16} className="text-red-500" />
            Subscribe to Channel
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@AccelerateB2B"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex text-sm"
          >
            <Youtube size={16} className="text-red-500" />
            View All Videos on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
