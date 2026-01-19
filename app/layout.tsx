import './globals.css'
import { Montserrat, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/common/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <Navbar />      {/* ✅ WAJIB */}
        {children}      {/* halaman */}
        <Footer />      {/* optional */}
      </body>
    </html>
  )
}