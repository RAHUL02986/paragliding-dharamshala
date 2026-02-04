import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0d5a3d',
}

export const metadata: Metadata = {
  title: 'Dharamshala Paragliding Adventures - Experience Mountain Flight',
  description: 'Discover the thrill of paragliding over the stunning Himalayas in Dharamshala. Expert-led tandem flights, advanced courses, and scenic tours.',
  keywords: 'paragliding, Dharamshala, adventure, Himalayas, tandem flight, extreme sports',
  authors: [{ name: 'Dharamshala Paragliding Adventures' }],
  openGraph: {
    title: 'Dharamshala Paragliding Adventures',
    description: 'Experience the beauty of Dharamshala from the skies',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
