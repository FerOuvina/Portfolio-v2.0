import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '../assets/home.png';

export default function Navbar() {
  return (
    <header className='fixed bottom-0 z-10 p-2 w-full backdrop-blur-sm bg-darkBrown'>
      <nav className='flex justify-center items-center'>
        <ul className='flex items-center'>
          <Link legacyBehavior href={'#'}>
            <a>
              <li
                className='mr-1 ml-1 md:flex md:flex-col md:items-center md:justify-center'
                title='Home'
              >
                <Image src={homeIcon} alt='home icon' width={50} height={50} />
                <p className='hidden md:block'>
                  <span className='text-aquaBlue'>{`<h1>`}</span> Home{' '}
                  <span className='text-aquaBlue'>{`</h1>`}</span>
                </p>
              </li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li
                className='mr-1 ml-1 md:flex md:flex-col md:items-center md:justify-center'
                title='About'
              >
                <Image src={homeIcon} alt='home icon' width={50} height={50} />
                <p className='hidden md:block'>
                  <span className='text-aquaBlue'>{`<h1>`}</span> Home{' '}
                  <span className='text-aquaBlue'>{`</h1>`}</span>
                </p>
              </li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li
                className='mr-1 ml-1 md:flex md:flex-col md:items-center md:justify-center'
                title='Projects'
              >
                <Image src={homeIcon} alt='home icon' width={50} height={50} />
                <p className='hidden md:block'>
                  <span className='text-aquaBlue'>{`<h1>`}</span> Home{' '}
                  <span className='text-aquaBlue'>{`</h1>`}</span>
                </p>
              </li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li
                className='mr-1 ml-1 md:flex md:flex-col md:items-center md:justify-center'
                title='Contact'
              >
                <Image src={homeIcon} alt='home icon' width={50} height={50} />
                <p className='hidden md:block'>
                  <span className='text-aquaBlue'>{`<h1>`}</span> Home{' '}
                  <span className='text-aquaBlue'>{`</h1>`}</span>
                </p>
              </li>
            </a>
          </Link>

          <Link legacyBehavior href={'#'}>
            <a>
              <li
                className='mr-1 ml-1 md:flex md:flex-col md:items-center md:justify-center'
                title='Blog'
              >
                <Image src={homeIcon} alt='home icon' width={50} height={50} />
                <p className='hidden md:block'>
                  <span className='text-aquaBlue'>{`<h1>`}</span> Home{' '}
                  <span className='text-aquaBlue'>{`</h1>`}</span>
                </p>
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
