import { gsap } from 'gsap';
import { useContext } from 'react';
import ZIndexContext from '@/context/zIndexContext';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import Image from 'next/image';

export default function DesktopIcons() {
  const { zIndex, setZIndex } = useContext(ZIndexContext);

  const openWelcomeCard = () => {
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
        y: 0,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex((zIndex + 1)),
      }
    );
  };

  const openSpecCard = () => {
    gsap.fromTo(
      '#specificationsCard',
      {
        x: -20,
        y: -220,
        opacity: 0.01,
        zIndex: zIndex,
      },
      {
        duration: 0.4,
        x: '0',
        y: 0,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex((zIndex + 1)),
      }
    );
  };

  const openProjectsCard = () => {
    gsap.fromTo(
      '#projects',
      {
        x: -20,
        y: -220,
        opacity: 0.01,
        zIndex: zIndex,
      },
      {
        duration: 0.4,
        x: '0',
        y: 0,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex((zIndex + 1)),
      }
    );
  };

  const openContactCard = () => {
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
        x: '0',
        y: 0,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex((zIndex + 1)),
      }
    );
  };

  const openBlogCard = () => {
    gsap.fromTo(
      '#blog',
      {
        x: -20,
        y: -220,
        opacity: 0.01,
        zIndex: zIndex,
      },
      {
        duration: 0.4,
        x: '0',
        y: 0,
        scale: 1.0,
        position: 'absolute',
        display: 'flex',
        opacity: 1,
        zIndex: setZIndex((zIndex + 1)),
      }
    );
  };

  return (
    <ul className='grid grid-cols-3 m-4 z-100'>
      <li className='flex flex-col justify-center items-center px-4 py-2'>
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
          <p className='mt-1'>Specifications</p>
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
    </ul>
  );
}
