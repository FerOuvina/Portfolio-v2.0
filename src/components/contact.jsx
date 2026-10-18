import { gsap } from 'gsap';
import { useContext } from 'react';
import ZIndexContext from '@/context/zIndexContext';
import { openCardTween, resetCardPosition } from '@/utils/cardPositions';
import useSound from 'use-sound';
import { useI18n } from '@/context/i18nContext';
import Card from './card';
import ContactYes from './contactYes';
import ContactNo from './contactNo';
import Button from './button';

export default function Contact() {
  const { t } = useI18n();
  const { zIndex, setZIndex } = useContext(ZIndexContext);
  const [playTadaa] = useSound('/sounds/Tadaa.mp3', {
    volume: 0.05
  });

  const openCard = (selector) => {
    const nextZIndex = zIndex + 1;
    setZIndex(nextZIndex);
    openCardTween(
      selector,
      { opacity: 0.01, scale: 0.95 },
      {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        position: 'absolute',
        display: 'flex',
        zIndex: nextZIndex
      }
    );
  };

  const handleYes = () => {
    resetCardPosition('#contact');
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      display: 'none'
    });
    openCard('#contactYes');
    playTadaa();
  };

  const handleNo = () => {
    resetCardPosition('#contact');
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      display: 'none'
    });
    openCard('#contactNo');
  };

  return (
    <>
      <Card
        navTitle={t('paths.contactChoose')}
        contentFirst={[
          <div
            key={'contactContainer'}
            className='flex flex-col items-center justify-center bg-[var(--card-bg)] textcen'>
            <span>{t('contact.warning')}</span>
            <br />
            <span>{t('contact.hackingDetected')}</span>
          </div>
        ]}
        contentH1={t('contact.question')}
        id={'contact'}
        minWidth={280}
        maxWidth={350}>
        <section className='container flex items-center justify-evenly contactCard'>
          <Button className='px-5 py-1 w-[100px] bg-[var(--card-bg)]' onClick={handleYes}>
            {t('contact.yes')}
          </Button>
          <Button onClick={handleNo} className={'px-5 py-1 bg-[var(--card-bg)] w-[100px]'}>
            {t('contact.no')}
          </Button>
        </section>
      </Card>

      <ContactYes />

      <ContactNo />
    </>
  );
}
