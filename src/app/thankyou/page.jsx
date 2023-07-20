'use client';

import { useState } from 'react';
import Card from '@/components/card';
import '../../stylesheets/thankYou.css';

export default function Page() {
  const [countdown, setCountdown] = useState(10);

  if (countdown > 0) {
    setTimeout(() => setCountdown(countdown - 1), 1000);
  }

  if (countdown === 0) {
    setTimeout(() => (window.location.href = `/`), 500);
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen mainContainer'>
      <Card
        navTitle={`/home/thank-you`}
        contentFirst={`Thank you for your message!`}
        contentH1={`I will get back to you as soon as possible.`}
        contentH2={[
          <div key={`contenet-subTitle`}>
            <p>
              Redirecting you to the home page in <span>{countdown}</span>{' '}
              seconds...
            </p>
          </div>,
        ]}
        id={`thankYouCard`}
        width={300}
      ></Card>
    </div>
  );
}
