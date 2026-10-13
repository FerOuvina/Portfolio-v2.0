import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/context/themeContext';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
  title: `Fernando Ouviña - Full Stack Developer`,
  description:
    'Fernando Ouviña - Full Stack Developer, JavaScript, React, MySQL, PHP, Git, Github.'
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t&&t!=='light')document.documentElement.classList.add('theme-'+t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
