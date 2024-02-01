import Card from './card';
import Image from 'next/image';
import Link from 'next/link';
import javaScriptLogo from '../assets/logos/JavaScript-COLOR-Logo.svg';
import reactLogo from '../assets/logos/React-COLOR-Logo.svg';
import nextLogo from '../assets/logos/Next-Logo.svg';
import tailwindLogo from '../assets/logos/Tailwind-COLOR-Logo.svg';
import wouterLogo from '../assets/logos/Wouter-Logo.svg';
import nextUILogo from '../assets/logos/NextUI-Logo.png';
import CSSLogo from '../assets/logos/CSS-Logo.svg';
import HTMLLogo from '../assets/logos/HTML-Logo.svg';
import gsapLogo from '../assets/logos/Gsap-Logo.svg';
import millionLogo from '../assets/logos/Million-Logo.png';
import viteLogo from '../assets/logos/Vite-Logo.svg';
import xkcdGif from '../assets/images/xkcdGif.gif';
import giphy1 from '../assets/images/Giphy1.gif';
import encryptorGif from '../assets/images/Encryptor.gif';
import ishinoguroGif from '../assets/images/ishinoguroGif.gif';
import '../stylesheets/projects.css';

export default function Projects() {
  return (
    <Card
      navTitle={`/projects/hmm...`}
      contentFirst={`My Projects`}
      contentH1={`These projects truly shine and exemplify the best of my abilities.`}
      contentH2={`Keep scrolling to discover more exceptional work that I'm proud to share with you!`}
      id={'projects'}
      minWidth={300}
      maxWidth={800}
    >
      <section className='overflow-y-scroll px-2 py-3 w-full h-56 bg-white sm:h-72 md:h-96 projectsContainer'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-10'>
          <article>
            <Link legacyBehavior href={'https://www.ishinoguro.com.ar'}>
              <a target='_blank'>
                <p className='text-lg font-bold text-right sm:text-left text-brown'>
                  Ishinoguro - Digital Artist
                </p>
                <Image
                  src={ishinoguroGif}
                  alt='ishinoguro'
                  width={250}
                  quality={100}
                  title='Ishinoguro Digital Artist'
                  className='h-[150px]'
                />
              </a>
            </Link>
            <ul className='flex gap-1 justify-end mt-1 w-full sm:justify-start'>
              <li>
                <Image
                  src={javaScriptLogo}
                  alt='javascript'
                  width={25}
                  title='JavaScript'
                />
              </li>

              <li>
                <Image src={reactLogo} alt='react' width={25} title='React' />
              </li>

              <li>
                <Image
                  src={tailwindLogo}
                  alt='tailwind'
                  width={25}
                  title='Tailwind'
                />
              </li>

              <li>
                <Image
                  src={millionLogo}
                  alt='Million.js Logo'
                  width={25}
                  title='Million.js'
                />
              </li>

              <li>
                <Image
                  src={wouterLogo}
                  alt='wouter'
                  width={25}
                  title='Wouter'
                />
              </li>

              <li>
                <Image src={viteLogo} alt='Vite' width={25} title='Vite' />
              </li>
            </ul>
            <p className='hidden font-mono md:block text-brown'>
              <li>This website was born from the artist's need to show her work on the web and be able to reach more users and, at the same time, offer a quick and easy way to request a commission.</li>
              <li>She chose me for the job after seeing my portfolio and thinking that I had a good taste for details and design.</li>
              <li>Thanks to that we were able to complete her project that brought her an average of 30 to 50 people a day on her website, as well as facilitate the commission filter for her work.</li>
            </p>
          </article>

          <article>
            <div className='md:flex md:justify-end'>
              <Link
                legacyBehavior
                href={'https://ferouvina.github.io/Giphy-App-v2/'}
              >
                <a target='_blank'>
                  <p className='text-lg font-bold text-right text-brown'>
                    Giphy App
                  </p>
                  <Image
                    src={giphy1}
                    alt='xkcd'
                    width={250}
                    quality={100}
                    title='Giphy App Gif'
                    className='h-[150px]'
                  />
                </a>
              </Link>
            </div>
            <ul className='flex gap-1 justify-end mt-1 w-full'>
              <li>
                <Image
                  src={javaScriptLogo}
                  alt='javascript'
                  width={25}
                  title='JavaScript'
                />
              </li>

              <li>
                <Image src={reactLogo} alt='react' width={25} title='React' />
              </li>

              <li>
                <span title='Styled Components' className='cursor-default'>
                  💅
                </span>
              </li>

              <li>
                <Image
                  src={wouterLogo}
                  alt='wouter'
                  width={25}
                  title='Wouter'
                />
              </li>
            </ul>
            <p className='hidden font-mono md:block sm:text-right text-brown'>
              This is a Giphy-like Gif Searching App made in React. <br />
              This project helped me a lot to really understand the core concepts
              of React. <br />
              Thanks to this I learned how to use hooks, useReducer, useEffect,
              useMemo, useState, useContext, and how to create custom hooks.
            </p>
          </article>

          <article>
            <Link
              legacyBehavior
              href={'https://ferouvina.github.io/Oracle-One-Encryptor/'}
            >
              <a target='_blank'>
                <p className='text-lg font-bold text-right sm:text-left text-brown'>
                  Simple Encryptor
                </p>
                <Image
                  src={encryptorGif}
                  alt='Encryptor Gif'
                  width={250}
                  quality={100}
                  title='Encryptor Gif'
                  className='h-[150px]'
                />
              </a>
            </Link>
            <ul className='flex gap-1 justify-end mt-1 w-full sm:justify-start'>
              <li>
                <Image
                  src={javaScriptLogo}
                  alt='javascript'
                  width={25}
                  title='JavaScript'
                />
              </li>

              <li>
                <Image src={HTMLLogo} alt='html' width={25} title='HTML' />
              </li>

              <li>
                <Image src={CSSLogo} alt='css' width={25} title='CSS' />
              </li>

            </ul>
            <p className='hidden font-mono md:block text-brown'>
              This is a simple encryptor made with HTML, CSS, and JavaScript.
              <br />
              This project helped me a lot to really understand the core concepts
              of JavaScript. <br />
              Thanks to this I learned how to use variables, data types,
              operators, and functions.
            </p>
          </article>

          <article>
            <div className='md:flex md:justify-end'>
              <Link legacyBehavior href={'https://xkcd-reimagined-git-master-ferouvina.vercel.app/en'}>
                <a target='_blank'>
                  <p className='text-lg font-bold text-right text-brown'>
                    xkcd - Reimagined
                  </p>
                  <Image
                    src={xkcdGif}
                    alt='xkcd'
                    width={250}
                    quality={100}
                    title='xkcd - Reimagined Gif'
                    className='h-[150px]'
                  />
                </a>
              </Link>
            </div>
            <ul className='flex gap-1 justify-end mt-1 w-full'>
              <li>
                <Image
                  src={javaScriptLogo}
                  alt='javascript'
                  width={25}
                  title='JavaScript'
                />
              </li>

              <li>
                <Image src={reactLogo} alt='react' width={25} title='React' />
              </li>

              <li>
                <Image src={nextLogo} alt='next' width={25} title='Next.js' />
              </li>

              <li>
                <Image
                  src={tailwindLogo}
                  alt='tailwind'
                  width={25}
                  title='Tailwind'
                />
              </li>

              <li>
                <Image
                  src={nextUILogo}
                  alt='nextui'
                  width={25}
                  title='NextUI'
                />
              </li>
            </ul>
            <p className='hidden font-mono md:block md:text-right text-brown'>
              This is a xkcd comic page made with Next.js to my liking, with a
              new modern look and feel. <br />
              Making this project I learned about scraping a web page, and using
              it to create a new one. <br />I also learned how to use Next.js and some of it&apos;s core features like getStaticProps, getServerSideProps, getStaticPaths, etc.
            </p>
          </article>
        </div>
      </section>
    </Card>
  );
}
