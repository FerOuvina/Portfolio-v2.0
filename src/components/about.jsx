import Image from 'next/image';
import Card from './card';
import javaScriptLogo from '../assets/logos/JavaScript-Logo.svg';
import reactLogo from '../assets/logos/React-Logo.svg';
import nextLogo from '../assets/logos/Next-Logo.svg';
import tailwindLogo from '../assets/logos/Tailwind-Logo.svg';
import gitLogo from '../assets/logos/Git-Logo.svg';
import javaLogo from '../assets/logos/Java-Logo.svg';
import MySQLLogo from '../assets/logos/Mysql-logo.svg';
import ExpressLogo from '../assets/logos/Express-logo.svg';
import '../stylesheets/about.css';

export default function About() {
  const imgWidth = 35;
  const imgHeight = 35;

  return (
    <Card
      navTitle={`/specifications/about`}
      contentFirst={'About Me'}
      contentText={[
        <span key={`about-span`}>
          I’m a web developer with over a year of experience working both
          independently and as part of a team, creating visually engaging and
          highly functional websites and applications.
          <br /> I’m now seeking new opportunities to apply my skills, take on
          new challenges, and grow professionally in the field of web
          development.
        </span>
      ]}
      id={`specificationsCard`}
      minWidth={300}
      maxWidth={400}>
      <footer className='w-full bg-white aboutContainer'>
        <h2 className='py-1 text-lg font-bold text-center text-brown'>
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
              src={MySQLLogo}
              alt='MySQL Logo'
              width={imgWidth}
              height={imgHeight}
              title='MySQL'
            />
          </li>

          <li>
            <Image
              src={ExpressLogo}
              alt='Express.js Logo'
              width={imgWidth}
              height={imgHeight}
              title='Express.js'
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
        </ul>
      </footer>
    </Card>
  );
}
