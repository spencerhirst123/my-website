import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Accelerate B2B | Cold Email Agency That Books Meetings',
  description:
    'We build and run outbound cold email systems that generate qualified meetings for B2B companies. Predictable pipeline, real results.',
  keywords: 'cold email agency, B2B lead generation, outbound sales, email outreach, sales development',
  openGraph: {
    title: 'Accelerate B2B | Cold Email Agency That Books Meetings',
    description:
      'We build and run outbound cold email systems that generate qualified meetings for B2B companies.',
    url: 'https://accelerateb2b.com',
    siteName: 'Accelerate B2B',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
