import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'カードノート',
  description: 'クレジットカード比較・おすすめ',
  keywords: 'カードノート,クレジットカード比較・おすすめ',
  openGraph: {
    title: 'カードノート',
    description: 'クレジットカード比較・おすすめ',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'カードノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'カードノート',
    description: 'クレジットカード比較・おすすめ',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
