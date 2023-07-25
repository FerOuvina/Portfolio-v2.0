'use client';

import { ZIndexProvider } from '@/context/zIndexContext';
import dynamic from 'next/dynamic';
import WelcomeScreen from '@/components/welcomeScreen';
import '../stylesheets/page.css';

const NavbarDynamic = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});
const ContentDynamic = dynamic(() => import('@/components/content'), {
  ssr: false,
});

export default function Home() {
  return (
    <ZIndexProvider>
      <div className='mainContainer'>
        <WelcomeScreen />
        <NavbarDynamic />
        <ContentDynamic />
      </div>
    </ZIndexProvider>
  );
}
