import Image from 'next/image';
import blueCircle from '../assets/blue-circle.png';
import brownCircle from '../assets/brown-circle.png';
import '../stylesheets/card.css';

export default function Card({
  children,
  navTitle,
  contentTitle,
  contentH1,
  contentH2,
}) {
  return (
    <section className='flex flex-col folderContainer'>
      <div className='flex justify-between border-b-2 border-black'>
        <h4 className='pl-1 text-brown'>{navTitle}</h4>
        <div className='flex items-center'>
          <Image src={blueCircle} alt='blue-circle' width={20} height={20} />
          <Image src={brownCircle} alt='blue-circle' width={20} height={20} />
        </div>
      </div>

      <div className='flex flex-col gap-4 justify-center items-center mx-3 my-6'>
        <div className='container flex justify-start items-center'>
          <p className='px-1 py-1 text-brown'>Search</p>
        </div>

        <div className='container text-brown folderContainer-content'>
          <p className='p-2 text-center'>{contentTitle}</p>
          <h1 className='p-2'>{contentH1}</h1>
          <h2 className='p-2'>{contentH2}</h2>
        </div>

        {children}
      </div>
    </section>
  );
}
