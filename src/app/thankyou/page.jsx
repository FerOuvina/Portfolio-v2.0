'use client';

import { useState } from 'react';
import Card from '@/components/card';
import { useI18n } from '@/context/i18nContext';
import '../../stylesheets/thankYou.css';

export default function Page() {
  const { t } = useI18n();
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
        navTitle={t('paths.thankYou')}
        contentFirst={t('thankYou.title')}
        contentH1={t('thankYou.subtitle')}
        contentH2={[
          <div key={`contenet-subTitle`}>
            <p>
              {t('thankYou.redirecting')} <span>{countdown}</span>{' '}
              {t('thankYou.seconds')}
            </p>
          </div>,
        ]}
        id={`thankYouCard`}
        width={300}
      ></Card>
    </div>
  );
}
