import Card from './card';
import Link from 'next/link';
import Image from 'next/image';
import gitHubLogo from '../assets/GitHub-Logo.svg';
import linkedInLogo from '../assets/LinkedIn-Logo.svg';
import blogLogo from '../assets/Blog-Logo.svg';

export default function WelcomeCard() {
  return (
    <Card
      navTitle={'/home/welcome'}
      contentFirst={'Welcome!'}
      contentH1={`I'm Fernando Ouviña`}
      contentH2={`I'm a Front End Developer`}
      contentText={[
        `Check out my github to see what I'm working on`,
        <br key={'welcomeCard-br'} />,
        `Also check my LinkedIn I `,
        <em key={'welcomeCard-sometimes'}>(sometimes)</em>,
        ` post about my projects there.`,
        <br key={'welcomeCard-br2'} />,
        `And don't forget to visit my blog too `,
        <em key={'welcomeCard-wip'}>(still in progress),</em>,
        ` I post some interesting stuff there.`,
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
            <a>
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
            <a>
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
            <a>
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
