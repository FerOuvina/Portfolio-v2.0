import Image from 'next/image';
import Card from './card';
import javaScriptLogo from '../assets/JavaScript-Logo.svg';
import reactLogo from '../assets/React-Logo.svg';
import nextLogo from '../assets/Next-Logo.svg';
import tailwindLogo from '../assets/Tailwind-Logo.svg';
import gitLogo from '../assets/Git-Logo.svg';
import javaLogo from '../assets/Java-Logo.svg';
import CSSLogo from '../assets/CSS-Logo.svg';
import HTMLLogo from '../assets/HTML-Logo.svg';
import '../stylesheets/about.css';

export default function About() {
  const imgWidth = 35;
  const imgHeight = 35;

  return (
    <Card
      navTitle={`/specifications/about`}
      contentFirst={'About Me'}
      contentText={[
        `I'm a passionate web developer who loves to create beautiful and functional websites, and applications.`,
        <br key={'specificationsCard-br'} />,
        `I'm currently looking for opportunities to grow my skills and a chance to start my career as a developer.`,
      ]}
      id={`specificationsCard`}
      width={300}
    >
      <footer className='w-full bg-white aboutContainer'>
        <h2 className='text-lg text-center text-brown'>
          This is my current stack
        </h2>
        <hr className='w-full border-2 breakLine' />
        <ul className='grid grid-cols-4 gap-2 justify-items-center mx-2 my-3'>
          <li>
            <Image
              src={javaScriptLogo}
              alt='JavaScript Logo'
              width={imgWidth}
              height={imgHeight}
              title='JavaScript'
            />
          </li>

          <li>
            <Image
              src={reactLogo}
              alt='React Logo'
              width={imgWidth}
              height={imgHeight}
              title='React'
            />
          </li>

          <li>
            <Image
              src={nextLogo}
              alt='Next Logo'
              width={imgWidth}
              height={imgHeight}
              title='Next.js'
            />
          </li>

          <li>
            <Image
              src={tailwindLogo}
              alt='TailwindCSS Logo'
              width={imgWidth}
              height={imgHeight}
              title='TailwindCSS'
            />
          </li>

          <li>
            <Image
              src={gitLogo}
              alt='Git Logo'
              width={imgWidth}
              height={imgHeight}
              title='Git'
            />
          </li>

          <li>
            <Image
              src={javaLogo}
              alt='Java Logo'
              width={imgWidth}
              height={imgHeight}
              title='Java'
            />
          </li>

          <li>
            <Image
              src={CSSLogo}
              alt='CSS Logo'
              width={imgWidth}
              height={imgHeight}
              title='CSS'
            />
          </li>

          <li>
            <Image
              src={HTMLLogo}
              alt='HTML Logo'
              width={imgWidth}
              height={imgHeight}
              title='HTML'
            />
          </li>
        </ul>
      </footer>
    </Card>
  );
}
