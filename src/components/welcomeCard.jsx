import Card from './card';
import Link from 'next/link';

export default function WelcomeCard() {
  return (
    <Card
      navTitle={'/home/welcome'}
      contentTitle={'Welcome!'}
      contentH1={`I'm Fernando Ouviña`}
      contentH2={`I'm a Front End Developer`}
      id={'welcomeCard'}
      width={250}
    >
      <footer className='container bg-white'>
        <ul className='flex justify-around p-2 text-brown'>
          <Link
            legacyBehavior
            href={'https://github.com/FerOuvina'}
            referrerPolicy='no-referrer'
          >
            <a>
              <li title='Github Profile'>#github</li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'https://www.linkedin.com/in/fernando07'}
            referrerPolicy='no-referrer'
          >
            <a>
              <li title='LinkedIn Profile'>#linkedin</li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'example.com'}
            referrerPolicy='no-referrer'
          >
            <a>
              <li title='Personal Blog'>#blog</li>
            </a>
          </Link>
        </ul>
      </footer>
    </Card>
  );
}
