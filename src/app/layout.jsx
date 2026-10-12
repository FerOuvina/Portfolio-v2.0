import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
  title: `Fernando Ouviña - Full Stack Developer`,
  description:
    'Fernando Ouviña - Full Stack Developer, JavaScript, React, MySQL, PHP, Git, Github.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
