import { useRef } from 'react';
import { gsap } from 'gsap';
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
import '../stylesheets/navbarSmallScreen.css';

export default function NavbarSmallScreen() {
  const isIntersecting = useObserver('welcomeCard');
  const [playWelcomeCardSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05
  });
  const isIntersecting2 = useObserver('specificationsCard');
  const [playSpecCardSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05
  });
  const isIntersecting3 = useObserver('projects');
  const [playProjectsSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.05
  });
  const isIntersecting4 = useObserver('contact');
  const [playContactSound] = useSound('/sounds/Chord.mp3', {
    volume: 0.05
  });
  const isIntersecting5 = useObserver('blog');
  const [playBlogSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05
  });
  const isIntersecting6 = useObserver('mediaCard');
  const [playMusicSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05
  });
  const isIntersecting7 = useObserver('themesCard');
  const [playThemesSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.05
  });

  const openWelcomeCard = () => {
    openMenu();
    if (isIntersecting) {
      minimizeCard('#welcomeCard');
      return;
    }
    openCard('#welcomeCard');
    playWelcomeCardSound();
  };

  const openSpecCard = () => {
    openMenu();
    if (isIntersecting2) {
      minimizeCard('#specificationsCard');
      return;
    }
    openCard('#specificationsCard', {
      from: { x: 20, y: -200, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playSpecCardSound();
  };

  const openProjectsCard = () => {
    openMenu();
    if (isIntersecting3) {
      minimizeCard('#projects');
      return;
    }
    openCard('#projects', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playProjectsSound();
  };

  const openContactCard = () => {
    openMenu();
    if (isIntersecting4) {
      minimizeCard('#contact');
      return;
    }
    openCard('#contact', {
      from: { x: -20, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playContactSound();
  };

  const openBlogCard = () => {
    openMenu();
    if (isIntersecting5) {
      minimizeCard('#blog');
      return;
    }
    openCard('#blog', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playBlogSound();
  };

  const openMusicCard = () => {
    openMenu();
    if (isIntersecting6) {
      minimizeCard('#mediaCard');
      return;
    }
    openCard('#mediaCard', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playMusicSound();
  };

  const openThemeCard = () => {
    openMenu();
    if (isIntersecting7) {
      minimizeCard('#themesCard');
      return;
    }
    openCard('#themesCard', {
      from: { x: 0, y: -220, opacity: 0.01 },
      to: { duration: 0.4, x: 0, y: -30, scale: 1.0, opacity: 1 }
    });
    playThemesSound();
  };

  const menuIconRef = useRef();
  const menuRef = useRef();

  const openMenu = () => {
    menuIconRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('closed');
  };

  return (
    <header className='fixed z-[10000] bottom-0 p-1 w-full bg-[var(--taskbar-bg)] mainNav'>
      <div
        className='closed flex absolute bottom-[53px] -left-1 justify-between w-72 items-center bg-[var(--menu-bg)] menuContainer pl-2'
        ref={menuRef}>
        <hr className='h-auto w-[13px] separator' />
        <div className='flex flex-col items-center justify-center w-full text-[var(--menu-text)]'>
          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openWelcomeCard}>
            <Image src={icon4} alt='icon' width={45} height={45} />
            <p>This PC</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openProjectsCard}>
            <Image src={icon3} alt='icon' width={45} height={45} />
            <p>Projects</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openSpecCard}>
            <Image src={icon2} alt='icon' width={45} height={45} />
            <p>Specs</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openContactCard}>
            <Image src={icon5} alt='icon' width={45} height={45} />
            <p>Contact</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openBlogCard}>
            <Image src={icon1} alt='icon' width={45} height={45} />
            <p>Blog</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openMusicCard}>
            <Image src={icon6} alt='icon' width={45} height={45} />
            <p>Music</p>
          </button>

          <button
            className='flex items-center justify-start w-full gap-6 buttonIcon'
            onClick={openThemeCard}>
            <Image src={icon8} alt='icon' width={45} height={45} />
            <p>Themes</p>
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
