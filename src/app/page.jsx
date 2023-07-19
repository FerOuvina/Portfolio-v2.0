'use client';

import dynamic from 'next/dynamic';
import { ZIndexProvider } from '@/context/zIndexContext';
import Content from '@/components/content';
import WelcomeScreen from '@/components/welcomeScreen';
import '../stylesheets/page.css';

const NavbarDynamic = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});

export default function Home() {
  return (
    <ZIndexProvider>
      <div className='mainContainer'>
        <WelcomeScreen />
        <NavbarDynamic />
        <Content />
      </div>
    </ZIndexProvider>
  );
}
