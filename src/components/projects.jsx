import Card from './card';
import Image from 'next/image';
import Link from 'next/link';
import javaScriptLogo from '../assets/logos/JavaScript-COLOR-Logo.svg';
import reactLogo from '../assets/logos/React-COLOR-Logo.svg';
import nextLogo from '../assets/logos/Next-Logo.svg';
import tailwindLogo from '../assets/logos/Tailwind-COLOR-Logo.svg';
import wouterLogo from '../assets/logos/Wouter-Logo.svg';
import nextUILogo from '../assets/logos/NextUI-Logo.png';
import millionLogo from '../assets/logos/Million-Logo.png';
import viteLogo from '../assets/logos/Vite-Logo.svg';
import xkcdGif from '../assets/images/xkcdGif.gif';
import giphy1 from '../assets/images/Giphy1.gif';
import ishinoguroGif from '../assets/images/ishinoguroGif.gif';
import gfawakeningGif from '../assets/images/gfawakening.gif';
import '../stylesheets/projects.css';

const stack = {
  javascript: { src: javaScriptLogo, title: 'JavaScript' },
  react: { src: reactLogo, title: 'React' },
  next: { src: nextLogo, title: 'Next.js' },
  tailwind: { src: tailwindLogo, title: 'Tailwind CSS' },
  wouter: { src: wouterLogo, title: 'Wouter' },
  nextui: { src: nextUILogo, title: 'NextUI' },
  million: { src: millionLogo, title: 'Million.js' },
  vite: { src: viteLogo, title: 'Vite' },
  styled: { emoji: '💅', title: 'Styled Components' },
};

const projects = [
  {
    title: 'Ishinoguro — Digital Artist',
    url: 'https://www.ishinoguro.com.ar',
    image: ishinoguroGif,
    summary:
      'Portfolio and commission-management PWA that I built from scratch for a digital artist — it attracted 30–50 visitors a day.',
    stack: ['javascript', 'react', 'tailwind', 'million', 'wouter', 'vite'],
  },
  {
    title: 'Grand Fantasia Awakening',
    url: 'https://gfawakening.online',
    image: gfawakeningGif,
    summary:
      'Official game website with registration, downloads and news. I also maintained the Ubuntu VPS that hosted it.',
    stack: ['javascript', 'react', 'tailwind', 'styled', 'wouter'],
  },
  {
    title: 'xkcd — Reimagined',
    url: 'https://xkcd-reimagined-git-master-ferouvina.vercel.app/en',
    image: xkcdGif,
    summary:
      'The xkcd comic archive rebuilt in Next.js: I scraped the comics from the source and served them with static generation.',
    stack: ['javascript', 'react', 'next', 'tailwind', 'nextui'],
  },
  {
    title: 'Giphy App',
    url: 'https://ferouvina.github.io/Giphy-App-v2/',
    image: giphy1,
    summary:
      'GIF search with infinite scroll and lazy loading — the project where I leveled up my React hooks and custom hooks.',
    stack: ['javascript', 'react', 'styled', 'wouter'],
  },
];

export default function Projects() {
  return (
    <Card
      navTitle={'/projects/hmm...'}
      contentFirst={'My most recent work'}
      contentH1={'Four projects I am proud of.'}
      contentH2={'Click any of them to open the live version.'}
      id={'projects'}
      minWidth={300}
      maxWidth={800}>
      <section className='overflow-y-scroll px-2 py-3 w-full h-56 bg-white sm:h-72 md:h-96 projectsContainer'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'>
          {projects.map((project) => (
            <article key={project.title} className='projectEntry'>
              <Link legacyBehavior href={project.url}>
                <a target='_blank' className='projectThumbLink'>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={400}
                    height={150}
                    quality={100}
                    title={project.title}
                    className='projectThumb'
                  />
                </a>
              </Link>

              <div className='projectBody'>
                <div className='flex items-start justify-between gap-2'>
                  <h3 className='font-bold text-brown'>{project.title}</h3>
                  <Link legacyBehavior href={project.url}>
                    <a
                      target='_blank'
                      className='projectLink'
                      title='Open live version'>
                      ↗
                    </a>
                  </Link>
                </div>

                <p className='text-sm font-mono text-brown'>{project.summary}</p>

                <ul className='flex flex-wrap gap-1'>
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      title={stack[tech].title}
                      className='projectTech'>
                      {stack[tech].emoji ? (
                        <span>{stack[tech].emoji}</span>
                      ) : (
                        <Image
                          src={stack[tech].src}
                          alt={stack[tech].title}
                          width={22}
                          height={22}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Card>
  );
}
