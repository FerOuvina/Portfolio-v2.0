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
import xkcdGif from '../assets/images/xkcdGif.gif';
import giphy1 from '../assets/images/Giphy1.gif';
import portfolioGif from '../assets/images/Portfolio.gif';
import hangmanGif from '../assets/images/HangmanGif1.gif';
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
            <Link legacyBehavior href={'https://xkcd-reimagined.vercel.app/'}>
              <a target='_blank'>
                <p className='text-lg font-bold text-right sm:text-left text-brown'>
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
            <p className='hidden font-mono md:block text-brown'>
              This is a xkcd comic page made with Next.js to my liking, with a
              new modern look and feel. <br />
              Making this project I learned about scraping a web page, and using
              it to create a new page. <br />I also learned how to use Next.js
              getStaticProps, getServerSideProps, getStaticPaths, etc.
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
              This project helped me a lot to really undertand the core concepts
              of React. <br />
              Thanks to this I learned how to use hooks, useReducer, useEffect,
              useMemo, useState, useContext, and how to create custom hooks.
            </p>
          </article>

          <article>
            <Link
              legacyBehavior
              href={'https://ferouvina.github.io/Portfolio/'}
            >
              <a target='_blank'>
                <p className='text-lg font-bold text-right sm:text-left text-brown'>
                  My first Portfolio
                </p>
                <Image
                  src={portfolioGif}
                  alt='xkcd'
                  width={250}
                  quality={100}
                  title='Portfolio Gif'
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

              <li>
                <Image src={gsapLogo} alt='gsap' width={25} title='Gsap' />
              </li>
            </ul>
            <p className='hidden font-mono md:block text-brown'>
              This was my first ever portfolio, I made it using vanilla
              JavaScript, plain HTML and CSS. <br />I also used gsap for making
              animations. <br />I made this to put in practice what I have
              learned and to showcase it. Thanks to this project I learned a lot
              of JavaScript, specifically about of the Intersection Observer
              API.
            </p>
          </article>

          <article>
            <div className='md:flex md:justify-end'>
              <Link
                legacyBehavior
                href={
                  'https://ferouvina.github.io/Oracle-One-Hangman/index.html'
                }
              >
                <a target='_blank'>
                  <p className='text-lg font-bold text-right text-brown'>
                    Hangman Game
                  </p>
                  <Image
                    src={hangmanGif}
                    alt='Hangman Game'
                    width={250}
                    quality={100}
                    title='Hangman Game Gif'
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
                <Image src={HTMLLogo} alt='html' width={25} title='HTML' />
              </li>

              <li>
                <Image src={CSSLogo} alt='css' width={25} title='CSS' />
              </li>
            </ul>
            <p className='hidden font-mono md:block md:text-right text-brown'>
              This was my first challenge at that time, making the logic of this
              game took a lot of effort and research. <br />
              But in the end it was a success, and thanks to this I learned a
              lot of JavaScript. <br />
            </p>
          </article>
        </div>
      </section>
    </Card>
  );
}
