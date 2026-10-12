import { useContext, useEffect, useRef } from 'react';
import interact from 'interactjs';
import { gsap } from 'gsap';
import Image from 'next/image';
import ZIndexContext from '@/context/zIndexContext';
import { resetCardPosition, saveCardPosition } from '@/utils/cardPositions';
import minus from '../assets/images/minus.svg';
import x from '../assets/images/x.svg';
import '../stylesheets/card.css';

export default function Card({
  children,
  navTitle,
  contentFirst,
  contentH1,
  contentH2,
  contentText,
  id,
  minWidth,
  maxWidth,
}) {
  const ref = useRef();
  const { zIndex, setZIndex } = useContext(ZIndexContext);
  const zIndexRef = useRef(zIndex);
  zIndexRef.current = zIndex;

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const blockNativeDrag = (event) => event.preventDefault();
    element.addEventListener('dragstart', blockNativeDrag);

    const interaction = interact(element);

    interaction.draggable({
      allowFrom: '.cardHeader',
      ignoreFrom: 'button, img',
      inertia: true,
      modifiers: [
        interact.modifiers.restrict({
          restriction: document.documentElement,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        }),
      ],
      listeners: {
        start(event) {
          const { target } = event;
          const { transform } = window.getComputedStyle(target);
          let x = 0;
          let y = 0;
          if (transform && transform !== 'none') {
            const matrix = new DOMMatrixReadOnly(transform);
            x = matrix.m41;
            y = matrix.m42;
          }
          gsap.set(target, { x, y });
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
          const nextZIndex = zIndexRef.current + 1;
          setZIndex(nextZIndex);
          gsap.set(target, { zIndex: nextZIndex });
          document.body.classList.add('draggingWindow');
          window.getSelection().removeAllRanges();
        },
        move(event) {
          const { target } = event;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.transform = `translate(${x}px, ${y}px)`;
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
        end(event) {
          const { target } = event;
          const x = parseFloat(target.getAttribute('data-x')) || 0;
          const y = parseFloat(target.getAttribute('data-y')) || 0;
          gsap.set(target, { x, y });
          saveCardPosition(target);
          document.body.classList.remove('draggingWindow');
        },
      },
    });

    return () => {
      document.body.classList.remove('draggingWindow');
      element.removeEventListener('dragstart', blockNativeDrag);
      interaction.unset();
    };
  }, [setZIndex]);

  const getCurrentCardPosition = () => {
    saveCardPosition(ref.current);
  };

  const minimizeCard = () => {
    getCurrentCardPosition();
    gsap.to(ref.current, {
      scale: 0.1,
      x: -300,
      y: 1000,
      duration: 0.6,
    });
  };

  const closeCard = () => {
    resetCardPosition(ref.current);
    gsap.to(ref.current, {
      display: 'none',
      duration: 0.1,
    });
  };

  return (
    <section
      className={`hidden flex-col bg-white rounded-md folderContainer w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 3xl:w-[1500px]`}
      style={{
        minWidth: minWidth,
        maxWidth: maxWidth,
      }}
      id={id}
      ref={ref}
    >
      <div className='flex justify-between border-b-2 border-black cardHeader'>
        <h4 className='pl-1 font-mono text-brown'>{navTitle}</h4>
        <div className='flex gap-1 items-center mx-[2px]'>
          <Image
            src={minus}
            alt='blue-circle'
            width={22}
            height={22}
            className='cursor-pointer minus'
            onClick={minimizeCard}
            title='minimize'
          />
          <Image
            src={x}
            alt='blue-circle'
            width={22}
            height={22}
            className='cursor-pointer x'
            onClick={closeCard}
            title='close'
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-2 py-2 mx-3'>
        <div className='container flex items-center justify-start'>
          <div className='w-full px-1 py-1 font-bold text-brown'>
            {contentFirst ? contentFirst : 'Search'}
          </div>
        </div>

        <div className='container overflow-y-scroll font-mono bg-white text-brown max-h-[300px] sm:max-h-[500px] folderContainer-content'>
          <h1
            className={`px-2 overflow-auto ${contentH1 ? 'block' : 'hidden'}`}
          >
            {contentH1}
          </h1>
          <h2 className={`px-2 ${contentH2 ? 'block' : 'hidden'}`}>
            {contentH2}
          </h2>
          <div
            className={`px-2 max-h-[200px] min-h-min sm:max-h-full md:max-h-full ${
              contentText ? 'block' : 'hidden'
            }`}
          >
            {contentText}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
