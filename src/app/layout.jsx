import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: `Fernando Ouviña - Web Developer`,
  description: 'Fernando Ouviña - Web Developer, JavaScript, React, Next.js, TailwindCSS, HTML, CSS, Git, Github, Web Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
