import { useRef } from 'react';
import { gsap } from 'gsap';
import useSound from 'use-sound';
import Image from 'next/image';
import icon4 from '../assets/images/icon4.png';
import '../stylesheets/contactYes.css';
import '../stylesheets/welcomeScreen.css';

export default function WelcomeScreen() {
  const componentRef = useRef();
  const inputRef = useRef();
  const titleRef = useRef();
  const iconRef = useRef();
  const formRef = useRef();
  const [playSound] = useSound('/sounds/LogIn.mp3', {
    volume: 0.4,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value === '') {
      alert('Please enter a username');
      return;
    } else {
      playSound();
      gsap.fromTo(
        componentRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 2, display: 'none' }
      );
    }
  };

  return (
    <div
      className='absolute z-10 w-screen h-screen bg-aquaBlue'
      ref={componentRef}
    >
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='itemContainer w-[300px]'>
          <form
            className='flex flex-col justify-center items-center form-group'
            onSubmit={handleSubmit}
          >
            <p className='w-full text-left navTitle' ref={titleRef}>
              Log On to FernandOS
            </p>
            <div
              className='flex justify-center p-2 w-full h-full iconContainer'
              ref={iconRef}
            >
              <Image
                src={icon4}
                alt='icon'
                width={70}
                height={70}
                className='icon'
                title='FernandOS Icon'
              />
              <div className='flex flex-col pl-1'>
                <div className='flex items-center'>
                  <p className='flex items-center text-3xl font-bold text-[#1A1A19]'>
                    FernandOS
                  </p>
                  <p className='flex items-center px-1 h-full text-xl text-[#1A1A19]'>
                    2000
                  </p>
                </div>
                <p className='relative ml-12 text-2xl font-semibold text-[#1A1A19]'>
                  Professional
                </p>
              </div>
            </div>
            <hr className='w-full h-2 divider' />
            <div
              className='bg-[#D4D0C8] h-full w-full text-[#1A1A19] flex flex-col justify-center items-center p-4'
              ref={formRef}
            >
              <h1 className='text-2xl text-center'>Welcome</h1>
              <label htmlFor='username' className='text-center'>
                Please enter a username
              </label>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='mt-1 input'
                  ref={inputRef}
                />
                <button className='px-4 py-1 button'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
