import type { Metadata } from 'next'
import { Space_Mono, Syne } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import PaddleProvider from '@/components/PaddleProvider'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '600', '800'],
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const baseUrl = 'https://appbuildingblueprint.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'App Building Blueprint',
    template: '%s — App Building Blueprint',
  },
  description:
    'The checklist every vibe coder needs. 101 items across 13 sections — ship production-ready apps with Supabase, Stripe, and AI tools.',
  keywords: [
    'app building checklist',
    'vibe coding',
    'production ready app',
    'supabase checklist',
    'stripe checklist',
    'developer checklist',
    'launch checklist',
    'lovable',
    'base44',
    'bolt',
  ],
  authors: [{ name: 'App Building Blueprint', url: baseUrl }],
  creator: 'App Building Blueprint',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'App Building Blueprint',
    title: 'App Building Blueprint',
    description: 'The checklist every vibe coder needs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Building Blueprint',
    description: 'The checklist every vibe coder needs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body style={{ margin: 0, padding: 0, background: '#0a0a0f' }}>
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
        <PaddleProvider />
        {children}
      </body>
    </html>
  )
}
