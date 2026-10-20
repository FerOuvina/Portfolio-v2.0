import Card from './card';
import { useI18n } from '@/context/i18nContext';
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
import styledComponentsLogo from '../assets/logos/Styled-Components-Logo.svg';
import gitHubLogo from '../assets/logos/GitHub-Logo.svg';
import linkedInLogo from '../assets/logos/LinkedIn-Logo.svg';
import linkedinbotGif from '../assets/images/linkedinbot.gif';
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
  styled: { src: styledComponentsLogo, title: 'Styled Components' },
  github: { src: gitHubLogo, title: 'GitHub Actions' },
  linkedin: { src: linkedInLogo, title: 'LinkedIn API' },
  node: { title: 'Node.js', emoji: '⬢' }
};

const projects = [
  {
    id: 'linkedinBot',
    title: 'GitHub → LinkedIn Bot',
    url: 'https://ferouvina.github.io/LinkedIn_Github_Bot/',
    image: linkedinbotGif,
    stack: ['javascript', 'react', 'node', 'github', 'linkedin']
  },
  {
    id: 'grandFantasia',
    title: 'Grand Fantasia Awakening',
    url: 'https://gfawakening.vercel.app/',
    image: gfawakeningGif,
    stack: ['javascript', 'react', 'tailwind', 'styled', 'wouter']
  },
  {
    id: 'ishinoguro',
    title: 'Ishinoguro — Digital Artist',
    url: 'https://ishinoguro.vercel.app',
    image: ishinoguroGif,
    stack: ['javascript', 'react', 'tailwind', 'million', 'wouter', 'vite']
  },
  {
    id: 'giphy',
    title: 'Giphy App',
    url: 'https://ferouvina.github.io/Giphy-App-v2/',
    image: giphy1,
    stack: ['javascript', 'react', 'styled', 'wouter']
  }
];

export default function Projects() {
  const { t } = useI18n();
  return (
    <Card
      navTitle={t('paths.projects')}
      contentFirst={t('projects.title')}
      contentH1={t('projects.heading')}
      contentH2={t('projects.subheading')}
      id={'projects'}
      minWidth={300}
      maxWidth={800}>
      <section className='w-full h-56 px-2 py-3 overflow-y-scroll bg-[var(--card-bg)] sm:h-72 md:h-96 projectsContainer'>
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

              <div className='h-full projectBody'>
                <div className='flex items-start justify-between gap-2'>
                  <h3 className='font-bold text-[var(--menu-text)]'>
                    {project.title}
                  </h3>
                  <Link legacyBehavior href={project.url}>
                    <a
                      target='_blank'
                      className='bg-white projectLink'
                      title={t('projects.openLiveVersion')}>
                      ↗
                    </a>
                  </Link>
                </div>

                <p className='font-mono text-sm text-[var(--menu-text)]'>
                  {t(`projects.items.${project.id}.summary`)}
                </p>

                <div className='flex items-end h-full'>
                  <ul className='flex flex-wrap gap-1'>
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        title={stack[tech].title}
                        className='projectTech'>
                        {stack[tech].emoji ?
                          <span>{stack[tech].emoji}</span>
                        : <Image
                            className='bg-white'
                            src={stack[tech].src}
                            alt={stack[tech].title}
                            width={22}
                            height={22}
                          />
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Card>
  );
}
