import Card from './card';
import Link from 'next/link';
import Image from 'next/image';
import gitHubLogo from '../assets/logos/GitHub-Logo.svg';
import linkedInLogo from '../assets/logos/LinkedIn-Logo.svg';
import blogLogo from '../assets/logos/Blog-Logo.svg';

export default function WelcomeCard() {
  return (
    <Card
      navTitle={'/home/welcome'}
      contentFirst={[
        <span key={'welcomeCard-mainTitle'} className='text-lg'>
          Welcome!
        </span>,
      ]}
      contentH1={[
        <span key={'welcomeCard-title'} className='text-lg font-bold'>
          I&apos;m Fernando Ouvi&ntilde;a,
        </span>,
        <br key={'welcomeCard-title-br'} />,
        <span key={'welcomeCard-title2'} className='text-lg font-bold underline'>
          Front End Developer
        </span>,
      ]}
      contentText={[
        `Here you will find my latest work, a little something about me and my socials. Check out my github to see what I'm working on at the moment.`,
        <br key={'welcomeCard-br'} />,
        `Also check my LinkedIn, I `,
        <em key={'welcomeCard-sometimes'} className='underline'>
          sometimes
        </em>,
        ` post about my activities there.`,
        <br key={'welcomeCard-br2'} />,
        `And don't forget to visit my blog too `,
        <em key={'welcomeCard-wip'} className='underline'>
          still in progress
        </em>,
        `, I post some interesting stuff there.`,
      ]}
      id={'welcomeCard'}
      width={300}
    >
      <footer className='container bg-white'>
        <ul className='flex justify-around p-2 text-brown'>
          <Link
            legacyBehavior
            href={'https://github.com/FerOuvina'}
            referrerPolicy='no-referrer'
          >
            <a target='_blank'>
              <li title='Github Profile'>
                <Image
                  src={gitHubLogo}
                  alt='github logo'
                  width={30}
                  height={30}
                  title='Github'
                />
              </li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'https://www.linkedin.com/in/fernando07'}
            referrerPolicy='no-referrer'
          >
            <a target='_blank'>
              <li title='LinkedIn Profile'>
                <Image
                  src={linkedInLogo}
                  alt='linkedIn logo'
                  width={30}
                  height={30}
                  title='LinkedIn'
                />
              </li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'example.com'}
            referrerPolicy='no-referrer'
          >
            <a target='_blank'>
              <li title='Personal Blog'>
                <Image
                  src={blogLogo}
                  alt='blog logo'
                  width={30}
                  height={30}
                  title='Blog'
                />
              </li>
            </a>
          </Link>
        </ul>
      </footer>
    </Card>
  );
}
