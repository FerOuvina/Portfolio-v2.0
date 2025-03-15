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
import gfawakeningGif from '../assets/images/gfawakening.gif';
import '../stylesheets/projects.css';

export default function Projects() {
  return (
    <Card
      navTitle={`/projects/hmm...`}
      contentFirst={`My most recent work and projects`}
      contentH1={`These projects highlight my skills and showcase my best work.`}
      contentH2={`Keep scrolling to explore more projects that I'm excited to share with you!`}
      id={'projects'}
      minWidth={300}
      maxWidth={800}>
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
              <li>
                I developed a Progressive Web Application (PWA) from scratch
                using React for an artist looking to showcase her work online,
                expand her audience, and simplify commission requests. The
                website features a portfolio presentation, an image gallery, a
                contact form, and a detailed commission request system to
                streamline the process.
              </li>
              <li>
                The client selected me for the project after reviewing my
                portfolio and recognizing my attention to detail and strong
                design sensibility. As a result, we successfully launched a
                website that now attracts an average of 30 to 50 visitors per
                day, enhancing the artist's reach and improving commission
                management.
              </li>
            </p>
          </article>

          <article>
            <div className='md:flex md:justify-end'>
              <Link legacyBehavior href={'https://gfawakening.online'}>
                <a target='_blank'>
                  <p className='text-lg font-bold text-right text-brown'>
                    Grand Fantasia Awakening
                  </p>
                  <Image
                    src={gfawakeningGif}
                    alt='Grand Fantasia Awakening'
                    width={250}
                    quality={100}
                    title='Grand Fantasia Awakening Gif'
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
              <strong>Key Responsibilities:</strong> <br /> Developed and
              maintained the official website, ensuring intuitive navigation and
              a seamless user experience. <br /> Created a visually appealing
              interface that provides easy access to key game information,
              including registration, downloads, and news. <br /> Implemented
              new gameplay elements, such as dungeons, weapons, and enhanced
              mechanics, contributing to the game's content expansion. <br />{' '}
              Managed and optimized the game’s database, ensuring efficient and
              secure performance. <br /> Configured and maintained the server
              environment on a VPS running Ubuntu, managing the infrastructure
              required for the project's smooth operation.
            </p>
          </article>

          <article>
            <Link
              legacyBehavior
              href={
                'https://xkcd-reimagined-git-master-ferouvina.vercel.app/en'
              }>
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
            <ul className='flex gap-1 justify-start mt-1 w-full'>
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
              This is an xkcd comic page built with Next.js, redesigned with a
              modern look and feel to match my vision. Through this project, I
              gained hands-on experience in web scraping to extract and
              repurpose content for a new website. Additionally, I deepened my
              understanding of Next.js and its core features, including
              getStaticProps, getServerSideProps, and getStaticPaths.
            </p>
          </article>

          <article>
            <div className='md:flex md:justify-end'>
              <Link
                legacyBehavior
                href={'https://ferouvina.github.io/Giphy-App-v2/'}>
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
              This is a GIF search application, similar to Giphy, built with
              React. It features a search bar, lazy loading, and infinite
              scrolling for a smooth user experience. This project was
              instrumental in deepening my understanding of React's core
              concepts. Through it, I gained hands-on experience with hooks such
              as useReducer, useEffect, useMemo, useState, and useContext, as
              well as the creation of custom hooks.
            </p>
          </article>
        </div>
      </section>
    </Card>
  );
}
