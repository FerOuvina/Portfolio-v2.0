'use client';

import Content from '@/components/content';
import Navbar from '@/components/navbar';
import '../stylesheets/page.css';

export default function Home() {
  return (
    <div className='mainContainer'>
      <Navbar />
      <Content />
    </div>
  );
}
