import { gsap } from 'gsap';
import { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import ZIndexContext from '@/context/zIndexContext';
import useObserver from '@/hooks/useObserver';
import Image from 'next/image';
import icon1 from '../assets/images/icon1.ico';
import icon2 from '../assets/images/icon2.ico';
import icon3 from '../assets/images/icon3.ico';
import icon4 from '../assets/images/icon4.ico';
import icon5 from '../assets/images/icon5.ico';
import icon6 from '../assets/images/icon6.ico';

export default function DesktopIcons() {
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

  const isWelcomeCardIntersecting = useObserver('welcomeCard');
  const [playWelcomeCardSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.4,
  });
  const isSpecificationsCardIntersecting = useObserver('specificationsCard');
  const [playSpecCardSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.4,
  });
  const isProjectsCardIntersecting = useObserver('projects');
  const [playProjectsSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.4,
  });
  const isContactCardIntersecting = useObserver('contact');
  const [playContactSound] = useSound('/sounds/Chord.mp3', {
    volume: 0.4,
  });
  const isBlogCardIntersecting = useObserver('blog');
  const [playBlogSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.4,
  });
  const isMediaCardIntersecting = useObserver('mediaCard');
  const [playMusicSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.4,
  });

  const openWelcomeCard = () => {
    if (isWelcomeCardIntersecting) return;
    if (width > breakpoint) {
      gsap.fromTo(
        '#welcomeCard',
        {
          x: -20,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          x: -200,
          y: 100,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#welcomeCard',
        {
          x: -20,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: '0',
          y: -50,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
    playWelcomeCardSound();
  };

  const openSpecCard = () => {
    if (isSpecificationsCardIntersecting) return;
    if (width > breakpoint) {
      gsap.fromTo(
        '#specificationsCard',
        {
          x: 20,
          y: -200,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: 200,
          y: 50,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#specificationsCard',
        {
          x: 20,
          y: -200,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: 0,
          y: -30,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
    playSpecCardSound();
  };

  const openProjectsCard = () => {
    if (isProjectsCardIntersecting) return;
    gsap.fromTo(
      '#projects',
      {
        x: 0,
        y: -220,
        opacity: 0.01,
        zIndex: zIndex,
      },
      {
        duration: 0.4,
        x: 0,
        y: -30,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex(zIndex + 1),
      }
    );
    playProjectsSound();
  };

  const openContactCard = () => {
    if (isContactCardIntersecting) return;
    gsap.fromTo(
      '#contact',
      {
        x: -20,
        y: -220,
        opacity: 0.01,
        zIndex: zIndex,
      },
      {
        duration: 0.4,
        x: 0,
        y: -30,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex(zIndex + 1),
      }
    );
    playContactSound();
  };

  const openBlogCard = () => {
    if (isBlogCardIntersecting) return;
    if (width > breakpoint) {
      gsap.fromTo(
        '#blog',
        {
          x: 0,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: -100,
          y: -180,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#blog',
        {
          x: 0,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: 0,
          y: -30,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
    playBlogSound();
  };

  const openMusicCard = () => {
    if (isMediaCardIntersecting) return;
    if (width > breakpoint) {
      gsap.fromTo(
        '#mediaCard',
        {
          x: 0,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: -90,
          y: 160,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    } else {
      gsap.fromTo(
        '#mediaCard',
        {
          x: 0,
          y: -220,
          opacity: 0.01,
          zIndex: zIndex,
        },
        {
          duration: 0.4,
          x: 0,
          y: -30,
          scale: 1.0,
          position: 'absolute',
          display: 'flex',
          opacity: 1,
          zIndex: setZIndex(zIndex + 1),
        }
      );
    }
    playMusicSound();
  };

  return (
    <ul className='grid grid-cols-3 m-4 mt-20 text-black z-100 sm:flex'>
      <li className='flex flex-col justify-center items-center px-3 py-2'>
        <button
          onClick={openWelcomeCard}
          className='flex flex-col items-center'
          title='This PC'
        >
          <Image src={icon4} alt='icon1' width={50} height={50} />
          <p className='mt-1'>This PC</p>
        </button>
      </li>

      <li className='flex flex-col justify-center items-center px-4 py-2'>
        <button
          onClick={openProjectsCard}
          className='flex flex-col items-center'
          title='Projects'
        >
          <Image src={icon3} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Projects</p>
        </button>
      </li>

      <li className='flex flex-col justify-center items-center px-4 py-2'>
        <button
          onClick={openSpecCard}
          className='flex flex-col items-center'
          title='Specifications'
        >
          <Image src={icon2} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Specs</p>
        </button>
      </li>

      <li className='flex flex-col justify-center items-center px-4 py-2'>
        <button
          onClick={openContactCard}
          className='flex flex-col items-center'
          title='Contact'
        >
          <Image src={icon5} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Contact</p>
        </button>
      </li>

      <li className='flex flex-col justify-center items-center px-4 py-2'>
        <button
          onClick={openBlogCard}
          className='flex flex-col items-center'
          title='Blog'
        >
          <Image src={icon1} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Blog</p>
        </button>
      </li>

      <li className='flex flex-col justify-center items-center px-4 py-2'>
        <button
          onClick={openMusicCard}
          className='flex flex-col items-center'
          title='Media Player'
        >
          <Image src={icon6} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Music</p>
        </button>
      </li>
    </ul>
  );
}
