import { useContext, useRef } from 'react';
import { gsap } from 'gsap';
import useSound from 'use-sound';
import useObserver from '@/hooks/useObserver';
import ZIndexContext from '@/context/zIndexContext';
import Image from 'next/image';
import icon1 from '../assets/images/icon1.ico';
import icon2 from '../assets/images/icon2.ico';
import icon3 from '../assets/images/icon3.ico';
import icon4 from '../assets/images/icon4.ico';
import icon5 from '../assets/images/icon5.ico';
import icon6 from '../assets/images/icon6.ico';
import icon7 from '../assets/images/icon7.ico';
import icon8 from '../assets/images/icon8.ico';
import '../stylesheets/navbarSmallScreen.css';

export default function NavbarSmallScreen() {
  const { zIndex, setZIndex } = useContext(ZIndexContext);

  const isIntersecting = useObserver('welcomeCard');
  const [playWelcomeCardSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.4,
  });
  const isIntersecting2 = useObserver('specificationsCard');
  const [playSpecCardSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.4,
  });
  const isIntersecting3 = useObserver('projects');
  const [playProjectsSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.4,
  });
  const isIntersecting4 = useObserver('contact');
  const [playContactSound] = useSound('/sounds/Chord.mp3', {
    volume: 0.4,
  });
  const isIntersecting5 = useObserver('blog');
  const [playBlogSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.4,
  });
  const isIntersecting6 = useObserver('mediaCard');
  const [playMusicSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.4,
  });

  const [playLogOutSound] = useSound('/sounds/LogOff.mp3', {
    volume: 0.2,
  });

  const openWelcomeCard = () => {
    if (isIntersecting) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
        y: -30,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex(zIndex + 1),
      }
    );
    playWelcomeCardSound();
  };

  const openSpecCard = () => {
    if (isIntersecting2) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
    playSpecCardSound();
  };

  const openProjectsCard = () => {
    if (isIntersecting3) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
    if (isIntersecting4) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
    if (isIntersecting5) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
    playBlogSound();
  };

  const openMusicCard = () => {
    if (isIntersecting6) return;
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
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
    playMusicSound();
  };

  const menuIconRef = useRef();
  const menuRef = useRef();

  const openMenu = () => {
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
  };

  const logOut = () => {
    playLogOutSound();
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
    gsap.to(`#welcomeScreen`, {
      display: `block`,
      opacity: 1,
      duration: 1,
    });
  };

  return (
    <header className='fixed z-[10000] bottom-0 p-1 w-full bg-[#D4D0C8] mainNav'>
      <div
        className='closed flex absolute bottom-[53px] -left-1 justify-between w-72 items-center bg-white menuContainer'
        ref={menuRef}
      >
        <hr className='h-[389px] w-[13px] bg-black separator' />
        <div className='flex flex-col justify-center items-center w-full text-brown'>
          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openWelcomeCard}
          >
            <Image src={icon4} alt='icon' width={45} height={45} />
            <p>This PC</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openProjectsCard}
          >
            <Image src={icon3} alt='icon' width={45} height={45} />
            <p>Projects</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openSpecCard}
          >
            <Image src={icon2} alt='icon' width={45} height={45} />
            <p>Specs</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openContactCard}
          >
            <Image src={icon5} alt='icon' width={45} height={45} />
            <p>Contact</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openBlogCard}
          >
            <Image src={icon1} alt='icon' width={45} height={45} />
            <p>Blog</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={openMusicCard}
          >
            <Image src={icon6} alt='icon' width={45} height={45} />
            <p>Music</p>
          </button>

          <button
            className='flex gap-6 justify-start items-center w-full buttonIcon'
            onClick={logOut}
          >
            <Image src={icon8} alt='icon' width={45} height={45} />
            <p>Log Out</p>
          </button>
        </div>
      </div>
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
    </header>
  );
}
