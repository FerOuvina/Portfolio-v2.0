import { gsap } from 'gsap';
import { useContext } from 'react';
import ZIndexContext from '@/context/zIndexContext';
import { openCardTween, resetCardPosition } from '@/utils/cardPositions';
import useSound from 'use-sound';
import Card from './card';
import ContactYes from './contactYes';
import ContactNo from './contactNo';
import Button from './button';

export default function Contact() {
  const { zIndex, setZIndex } = useContext(ZIndexContext);
  const [playTadaa] = useSound('/sounds/Tadaa.mp3', {
    volume: 0.2,
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
        zIndex: nextZIndex,
      }
    );
  };

  const handleYes = () => {
    resetCardPosition('#contact');
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      display: 'none',
    });
    openCard('#contactYes');
    playTadaa();
  };

  const handleNo = () => {
    resetCardPosition('#contact');
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      display: 'none',
    });
    openCard('#contactNo');
  };

  return (
    <>
      <Card
        navTitle={'/contact/choose'}
        contentFirst={[
          <div
            key={'contactContainer'}
            className='flex flex-col justify-center items-center bg-white textcen'
          >
            <span>WARNING</span>
            <br />
            <span>HACKING DETECTED</span>
          </div>,
        ]}
        contentH1={'Do you want to contact the admin of this page?'}
        id={'contact'}
        minWidth={280}
        maxWidth={350}
      >
        <section className='container flex justify-evenly items-center contactCard'>
          <Button className='px-5 py-1 w-[100px] bg-white' onClick={handleYes}>
            Yes
          </Button>
          <Button onClick={handleNo} className={'px-5 py-1 bg-white w-[100px]'}>
            No
          </Button>
        </section>
      </Card>

      <ContactYes />

      <ContactNo />
    </>
  );
}
