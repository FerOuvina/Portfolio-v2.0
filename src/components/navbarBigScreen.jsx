import Link from 'next/link';
import homeIcon from '../assets/images/home.png';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='fixed bottom-0 z-10 p-2 w-full backdrop-blur-sm bg-darkBrown'>
      <nav className='container flex items-center'>
        <ul className='flex items-center w-full'>
          <Link legacyBehavior href={'#'}>
            <a>
              <li className='mr-4'>{'Home'}</li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li className='mr-4'>{'About'}</li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li className='mr-4'>{'Projects'}</li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li className='mr-4'>{'Contact'}</li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li className='mr-4'>{'Blog'}</li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
