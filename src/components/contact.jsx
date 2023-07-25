import { gsap } from 'gsap';
import { useContext, useEffect, useState } from 'react';
import ZIndexContext from '@/context/zIndexContext';
import useSound from 'use-sound';
import Card from './card';
import ContactYes from './contactYes';
import ContactNo from './contactNo';
import Button from './button';

export default function Contact() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const { zIndex, setZIndex } = useContext(ZIndexContext);
  const [playTadaa] = useSound('/sounds/Tadaa.mp3', {
    volume: 0.2,
  });

  const handleYes = () => {
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      x: -100,
      display: 'none',
    });
    if (width > breakpoint) {
      gsap.fromTo(
        '#contactYes',
        {
          duration: 0.5,
          x: 100,
          opacity: 0,
          zIndex: zIndex,
        },
        {
          x: -150,
          y: -50,
          scale: 1,
          opacity: 1,
          position: 'absolute',
          display: 'flex',
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#contactYes',
        {
          duration: 0.5,
          x: 100,
          opacity: 0,
          zIndex: zIndex,
        },
        {
          x: 0,
          y: -50,
          scale: 1,
          opacity: 1,
          position: 'absolute',
          display: 'flex',
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
    playTadaa();
  };

  const handleNo = () => {
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      x: 100,
      display: 'none',
    });
    if (width > breakpoint) {
      gsap.fromTo(
        '#contactNo',
        {
          duration: 0.5,
          x: -100,
          opacity: 0,
          zIndex: zIndex,
        },
        {
          x: 150,
          y: -150,
          scale: 1,
          opacity: 1,
          position: 'absolute',
          display: 'flex',
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#contactNo',
        {
          duration: 0.5,
          x: -100,
          opacity: 0,
          zIndex: zIndex,
        },
        {
          x: 0,
          y: -50,
          scale: 1,
          opacity: 1,
          position: 'absolute',
          display: 'flex',
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
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
