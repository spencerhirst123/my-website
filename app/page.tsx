import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import WhatWeOffer from '@/components/WhatWeOffer';
import HowItWorks from '@/components/HowItWorks';
import AboutMe from '@/components/AboutMe';
import BookingCalendar from '@/components/BookingCalendar';
import NeedMoreConvincing from '@/components/NeedMoreConvincing';
import YouTubeVideos from '@/components/YouTubeVideos';
import FAQ from '@/components/FAQ';
import GeneralInquiry from '@/components/GeneralInquiry';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Slim announcement bar */}
      <AnnouncementBar />

      {/* Sticky main header */}
      <Header />

      {/* Hero — VSL + CTA */}
      <Hero />

      {/* Client logos */}
      <ClientLogos />

      {/* What we offer */}
      <WhatWeOffer />

      {/* How it works */}
      <HowItWorks />

      {/* About me */}
      <AboutMe />

      {/* Booking calendar */}
      <BookingCalendar />

      {/* Need more convincing — testimonials + guarantees */}
      <NeedMoreConvincing />

      {/* YouTube videos */}
      <YouTubeVideos />

      {/* FAQ */}
      <FAQ />

      {/* General inquiry form */}
      <GeneralInquiry />

      {/* Footer */}
      <Footer />
    </main>
  );
}
