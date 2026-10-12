import { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import useObserver from '@/hooks/useObserver';
import { minimizeCard, openCard } from '@/utils/cardPositions';
import Image from 'next/image';
import icon1 from '../assets/images/icon1.ico';
import icon2 from '../assets/images/icon2.ico';
import icon3 from '../assets/images/icon3.ico';
import icon4 from '../assets/images/icon4.ico';
import icon5 from '../assets/images/icon5.ico';
import icon6 from '../assets/images/icon6.ico';
import icon7 from '../assets/images/icon7.ico';
import icon8 from '../assets/images/icon8.ico';

export default function NavbarBigScreen() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const isIntersecting = useObserver('welcomeCard');
  const [playWelcomeCardSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05,
  });
  const isIntersecting2 = useObserver('specificationsCard');
  const [playSpecCardSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05,
  });
  const isIntersecting3 = useObserver('projects');
  const [playProjectsSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.05,
  });
  const isIntersecting4 = useObserver('contact');
  const [playContactSound] = useSound('/sounds/Chord.mp3', {
    volume: 0.05,
  });
  const isIntersecting5 = useObserver('blog');
  const [playBlogSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05,
  });
  const isIntersecting6 = useObserver('mediaCard');
  const [playMusicSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05,
  });

  // const [playLogOutSound] = useSound('/sounds/LogOff.mp3', {
  //   volume: 0.2,
  // });

  const openWelcomeCard = () => {
    if (isIntersecting) {
      minimizeCard('#welcomeCard');
      return;
    }
    openCard('#welcomeCard', {
      from: { x: -20, y: -220, opacity: 0.01 },
      to:
        width > breakpoint
          ? { x: -200, y: 100, scale: 1.0, opacity: 1 }
          : { duration: 0.4, x: 0, y: -50, scale: 1.0, opacity: 1 },
    });
    playWelcomeCardSound();
  };

  const openSpecCard = () => {
    if (isIntersecting2) {
      minimizeCard('#specificationsCard');
      return;
    }
    openCard('#specificationsCard', {
      from: { x: 20, y: -200, opacity: 0.01 },
      to:
        width > breakpoint
          ? { duration: 0.4, x: 200, y: 50, scale: 1.0, opacity: 1 }
          : { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 },
    });
    playSpecCardSound();
  };

  const openProjectsCard = () => {
    if (isIntersecting3) {
      minimizeCard('#projects');
      return;
    }
    openCard('#projects', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 },
    });
    playProjectsSound();
  };

  const openContactCard = () => {
    if (isIntersecting4) {
      minimizeCard('#contact');
      return;
    }
    openCard('#contact', {
      from: { x: -20, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 },
    });
    playContactSound();
  };

  const openBlogCard = () => {
    if (isIntersecting5) {
      minimizeCard('#blog');
      return;
    }
    openCard('#blog', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to:
        width > breakpoint
          ? { duration: 0.4, x: -100, y: -180, scale: 1.0, opacity: 1 }
          : { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 },
    });
    playBlogSound();
  };

  const openMusicCard = () => {
    if (isIntersecting6) {
      minimizeCard('#mediaCard');
      return;
    }
    openCard('#mediaCard', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to:
        width > breakpoint
          ? { duration: 0.4, x: -90, y: 160, scale: 1.0, opacity: 1 }
          : { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 },
    });
    playMusicSound();
  };

  const menuIconRef = useRef();
  const menuRef = useRef();

  const openMenu = () => {
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
  };

  // const logOut = () => {
  //   playLogOutSound();
  //   menuIconRef.current.classList.toggle('open');
  //   menuRef.current.classList.toggle('closed');
  //   gsap.to(`#welcomeScreen`, {
  //     display: `block`,
  //     opacity: 1,
  //     duration: 1,
  //   });
  // };

  return (
    <header className='fixed flex z-[10000] bottom-0 p-1 w-full bg-[#D4D0C8] mainNav'>
      <div
        className='closed flex absolute bottom-[49px] -left-1 justify-between w-72 items-center bg-white menuContainer'
        ref={menuRef}
      >
        <hr className='h-auto w-[13px] bg-black separator' />
        <div className='flex flex-col items-center justify-center w-full text-brown'>
          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openWelcomeCard();
            }}
          >
            <Image src={icon4} alt='icon' width={45} height={45} />
            <p>This PC</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openProjectsCard();
            }}
          >
            <Image src={icon3} alt='icon' width={45} height={45} />
            <p>Projects</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openSpecCard();
            }}
          >
            <Image src={icon2} alt='icon' width={45} height={45} />
            <p>Specs</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openContactCard();
            }}
          >
            <Image src={icon5} alt='icon' width={45} height={45} />
            <p>Contact</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openBlogCard();
            }}
          >
            <Image src={icon1} alt='icon' width={45} height={45} />
            <p>Blog</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={() => {
              openMenu();
              openMusicCard();
            }}
          >
            <Image src={icon6} alt='icon' width={45} height={45} />
            <p>Music</p>
          </button>

          {/* <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={logOut}
          >
            <Image src={icon8} alt='icon' width={45} height={45} />
            <p>Log Out</p>
          </button> */}
        </div>
      </div>

      <div className='flex w-screen gap-6'>
        <button>
          <Image
            src={icon7}
            alt='icon'
            width={40}
            height={40}
            ref={menuIconRef}
            onClick={openMenu}
          />
        </button>

        <div className='flex w-full text-brown'>
          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openWelcomeCard}
          >
            <Image src={icon4} alt='icon' width={30} height={30} />
            <p>This PC</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openProjectsCard}
          >
            <Image src={icon3} alt='icon' width={30} height={30} />
            <p>Projects</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openSpecCard}
          >
            <Image src={icon2} alt='icon' width={30} height={30} />
            <p>Specs</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openContactCard}
          >
            <Image src={icon5} alt='icon' width={30} height={30} />
            <p>Contact</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openBlogCard}
          >
            <Image src={icon1} alt='icon' width={30} height={30} />
            <p>Blog</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-2 buttonIcon'
            onClick={openMusicCard}
          >
            <Image src={icon6} alt='icon' width={30} height={30} />
            <p>Music</p>
          </button>
        </div>
      </div>
    </header>
  );
}
