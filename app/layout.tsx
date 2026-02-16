import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'The System - Autonomous Software Development Organization',
  description: 'Transform any idea into production-ready software with 26 AI specialists. From concept to deployment in minutes, not months.',
  keywords: [
    'autonomous software development',
    'AI development framework',
    'ASDO',
    'software automation',
    'AI agents',
    'rapid prototyping',
    'concept to production'
  ],
  authors: [{ name: 'The System ASDO Framework' }],
  creator: 'The System',
  publisher: 'The System',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vedanta.github.io/the-system',
    title: 'The System - Autonomous Software Development Organization',
    description: 'Transform any idea into production-ready software with 26 AI specialists.',
    siteName: 'The System',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The System - Autonomous Software Development Organization',
    description: 'Transform any idea into production-ready software with 26 AI specialists.',
    creator: '@thesystem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/the-system/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/the-system/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/the-system/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/the-system/favicon-16x16.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}