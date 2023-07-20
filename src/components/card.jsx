import { useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import close from '../assets/images/close.png';
import minimize from '../assets/images/minimize.png';
import '../stylesheets/card.css';

export default function Card({
  children,
  navTitle,
  contentFirst,
  contentH1,
  contentH2,
  contentText,
  id,
  width,
}) {
  if (width !== null && width !== undefined && width !== 0) {
    width = width;
  } else {
    width = 'auto';
  }

  const ref = useRef();
  const minimizeCard = () => {
    gsap.to(ref.current, {
      scale: 0.1,
      x: -300,
      y: 1000,
      duration: 0.6,
    });
  };

  const closeCard = () => {
    gsap.to(ref.current, {
      display: 'none',
      duration: 0.1,
    });
  };

  return (
    <section
      className={`hidden overflow-y-scroll flex-col folderContainer`}
      style={{
        width: width,
      }}
      id={id}
      ref={ref}
    >
      <div className='flex justify-between border-b-2 border-black'>
        <h4 className='pl-1 font-mono text-brown'>{navTitle}</h4>
        <div className='flex items-center'>
          <Image
            src={minimize}
            alt='blue-circle'
            width={25}
            height={25}
            className='cursor-pointer'
            onClick={minimizeCard}
            title='minimize'
          />
          <Image
            src={close}
            alt='blue-circle'
            width={25}
            height={25}
            className='cursor-pointer'
            onClick={closeCard}
            title='close'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 justify-center items-center py-2 mx-3'>
        <div className='container flex justify-start items-center'>
          <div className='px-1 py-1 w-full font-bold text-brown'>
            {contentFirst ? contentFirst : 'Search'}
          </div>
        </div>

        <div className='container font-mono bg-white text-brown folderContainer-content'>
          <h1
            className={`px-2 overflow-auto ${contentH1 ? 'block' : 'hidden'}`}
          >
            {contentH1}
          </h1>
          <h2 className={`px-2 ${contentH2 ? 'block' : 'hidden'}`}>
            {contentH2}
          </h2>
          <div className={`px-2 ${contentText ? 'block' : 'hidden'}`}>
            {contentText}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
