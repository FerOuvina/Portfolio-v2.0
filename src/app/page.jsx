'use client';

import { ZIndexProvider } from '@/context/zIndexContext';
import dynamic from 'next/dynamic';
import Content from '@/components/content';
import '../stylesheets/page.css';

const NavbarDynamic = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});

export default function Home() {
  return (
    <ZIndexProvider>
      <div className='mainContainer'>
        <NavbarDynamic />
        <Content />
      </div>
    </ZIndexProvider>
  );
}
