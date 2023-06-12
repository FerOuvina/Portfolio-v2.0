import { gsap } from 'gsap';
import { useContext } from 'react';
import ZIndexContext from '@/context/zIndexContext';
import Card from './card';
import ContactYes from './contactYes';
import ContactNo from './contactNo';
import '../stylesheets/contact.css';

export default function Contact() {
  const { zIndex, setZIndex } = useContext(ZIndexContext);

  const handleYes = () => {
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      x: -100,
      display: 'none',
    });
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
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'absolute',
        display: 'flex',
        zIndex: setZIndex(zIndex + 1),
      }
    );
  };

  const handleNo = () => {
    gsap.to('#contact', {
      duration: 0.5,
      opacity: 0,
      x: 100,
      display: 'none',
    });
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
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'absolute',
        display: 'flex',
        zIndex: setZIndex(zIndex + 1),
      }
    );
  };

  return (
    <>
      <Card
        navTitle={'/contact/choose'}
        contentFirst={[
          <div
            key={'contactContainer'}
            className='flex flex-col justify-center items-center textcen'
          >
            <span>WARNING</span>
            <br />
            <span>HACKING DETECTED</span>
          </div>,
        ]}
        contentH1={'Do you want to contact the admin of this page?'}
        id={'contact'}
        width={280}
      >
        <section className='container flex justify-evenly items-center text-brown contactCard'>
          <button
            className='px-3 py-1 mx-4 w-full bg-white'
            onClick={handleYes}
          >
            Yes
          </button>
          <button className='px-3 py-1 mx-4 w-full bg-white' onClick={handleNo}>
            No
          </button>
        </section>
      </Card>

      <ContactYes />

      <ContactNo />
    </>
  );
}
