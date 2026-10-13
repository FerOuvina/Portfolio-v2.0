import useSound from 'use-sound';
import { openCard } from '@/utils/cardPositions';
import useObserver from '@/hooks/useObserver';
import Image from 'next/image';
import icon1 from '../assets/images/icon1.ico';
import icon2 from '../assets/images/icon2.ico';
import icon3 from '../assets/images/icon3.ico';
import icon4 from '../assets/images/icon4.ico';
import icon5 from '../assets/images/icon5.ico';
import icon6 from '../assets/images/icon6.ico';
import icon8 from '../assets/images/icon8.ico';

export default function DesktopIcons() {
  const isWelcomeCardIntersecting = useObserver('welcomeCard');
  const [playWelcomeCardSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05
  });
  const isSpecificationsCardIntersecting = useObserver('specificationsCard');
  const [playSpecCardSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05
  });
  const isProjectsCardIntersecting = useObserver('projects');
  const [playProjectsSound] = useSound('/sounds/Chimes.mp3', {
    volume: 0.05
  });
  const isContactCardIntersecting = useObserver('contact');
  const [playContactSound] = useSound('/sounds/Chord.mp3', {
    volume: 0.05
  });
  const isBlogCardIntersecting = useObserver('blog');
  const [playBlogSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05
  });
  const isMediaCardIntersecting = useObserver('mediaCard');
  const [playMusicSound] = useSound('/sounds/Notify.mp3', {
    volume: 0.05
  });
  const isThemesCardIntersecting = useObserver('themesCard');
  const [playThemesSound] = useSound('/sounds/Ding.mp3', {
    volume: 0.05
  });

  const openWelcomeCard = () => {
    if (isWelcomeCardIntersecting) return;
    openCard('#welcomeCard');
    playWelcomeCardSound();
  };

  const openSpecCard = () => {
    if (isSpecificationsCardIntersecting) return;
    openCard('#specificationsCard');
    playSpecCardSound();
  };

  const openProjectsCard = () => {
    if (isProjectsCardIntersecting) return;
    openCard('#projects');
    playProjectsSound();
  };

  const openContactCard = () => {
    if (isContactCardIntersecting) return;
    openCard('#contact');
    playContactSound();
  };

  const openBlogCard = () => {
    if (isBlogCardIntersecting) return;
    openCard('#blog');
    playBlogSound();
  };

  const openMusicCard = () => {
    if (isMediaCardIntersecting) return;
    openCard('#mediaCard');
    playMusicSound();
  };

  const openThemeCard = () => {
    if (isThemesCardIntersecting) return;
    openCard('#themesCard');
    playThemesSound();
  };

  return (
    <ul className='grid grid-cols-3 m-4 mt-20 text-[var(--text-primary)] z-100 sm:flex'>
      <li className='flex flex-col items-center justify-center px-3 py-2'>
        <button
          onClick={openWelcomeCard}
          className='flex flex-col items-center'
          title='This PC'>
          <Image src={icon4} alt='icon1' width={50} height={50} />
          <p className='mt-1'>This PC</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openProjectsCard}
          className='flex flex-col items-center'
          title='Projects'>
          <Image src={icon3} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Projects</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openSpecCard}
          className='flex flex-col items-center'
          title='Specifications'>
          <Image src={icon2} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Specs</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openContactCard}
          className='flex flex-col items-center'
          title='Contact'>
          <Image src={icon5} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Contact</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openBlogCard}
          className='flex flex-col items-center'
          title='Blog'>
          <Image src={icon1} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Blog</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openMusicCard}
          className='flex flex-col items-center'
          title='Media Player'>
          <Image src={icon6} alt='icon1' width={50} height={50} />
          <p className='mt-1'>Music</p>
        </button>
      </li>

      <li className='flex flex-col items-center justify-center px-4 py-2'>
        <button
          onClick={openThemeCard}
          className='flex flex-col items-center'
          title='Themes'>
          <Image src={icon8} alt='icon8' width={50} height={50} />
          <p className='mt-1'>Themes</p>
        </button>
      </li>
    </ul>
  );
}
