'use client';

import { ZIndexProvider } from '@/context/zIndexContext';
import Content from '@/components/content';
import Navbar from '@/components/navbar';
import '../stylesheets/page.css';

export default function Home() {
  return (
    <ZIndexProvider>
      <div className='mainContainer'>
        <Navbar />
        <Content />
      </div>
    </ZIndexProvider>
  );
}
