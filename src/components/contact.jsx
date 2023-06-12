import { gsap } from 'gsap';
import Card from './card';
import ContactYes from './contactYes';
import ContactNo from './contactNo';
import '../stylesheets/contact.css';

export default function Contact() {
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
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'absolute',
        display: 'flex',
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
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'absolute',
        display: 'flex',
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
