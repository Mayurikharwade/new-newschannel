import './globals.css'
import { Mandali } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const mandali = Mandali({
  weight: '400',
  subsets: ['telugu'],
  display: 'swap',
})

export const metadata = {
  title: 'తొలి తెలుగు సాంకేతిక పత్రిక',
  description: 'Technology content'
}

export default function RootLayout({ children }) {
  return (
    <html lang="te" className={mandali.className}>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: '#fff',
        }}
      >
        <Header />
        <div style={{ height: '92px', width: '100%' }}></div>
        <div style={{ width: '100%', minHeight: '100vh' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}