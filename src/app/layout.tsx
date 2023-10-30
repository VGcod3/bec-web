import type { Metadata } from 'next'
import { ibm_plex_mono } from '../fonts';

import './globals.scss'


export const metadata: Metadata = {
  title: 'BEC 2023',
  description: 'BEC 2023 Webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} bg-bec-bg p-0 m-0`}>{children}</body>
    </html>
  )
}
