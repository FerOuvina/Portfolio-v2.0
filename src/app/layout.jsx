import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Fernando Ouviña - Web Developer`,
  description: 'Fernando Ouviña - Web Developer, JavaScript, React, Next.js, TailwindCSS, HTML, CSS, Git, Github, Web Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
