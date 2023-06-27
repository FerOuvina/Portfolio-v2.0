import Image from 'next/image';
import Card from './card';
import javaScriptLogo from '../assets/logos/JavaScript-Logo.svg';
import reactLogo from '../assets/logos/React-Logo.svg';
import nextLogo from '../assets/logos/Next-Logo.svg';
import tailwindLogo from '../assets/logos/Tailwind-Logo.svg';
import gitLogo from '../assets/logos/Git-Logo.svg';
import javaLogo from '../assets/logos/Java-Logo.svg';
import CSSLogo from '../assets/logos/CSS-Logo.svg';
import HTMLLogo from '../assets/logos/HTML-Logo.svg';
import '../stylesheets/about.css';

export default function About() {
  const imgWidth = 35;
  const imgHeight = 35;

  return (
    <Card
      navTitle={`/specifications/about`}
      contentFirst={'About Me'}
      contentText={[
        `I'm a skilled web developer who thrives on creating visually appealing and highly functional websites and applications.`,
        <br key={'about-br'} />,
        `Currently, I'm actively seeking opportunities to expand my skills and kickstart my career in this dynamic field.`,
      ]}
      id={`specificationsCard`}
      width={300}
    >
      <footer className='w-full bg-white aboutContainer'>
        <h2 className='py-1 text-lg text-center text-brown'>
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
