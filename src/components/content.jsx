import Image from 'next/image';
import blueCircle from '../assets/blue-circle.png';
import brownCircle from '../assets/brown-circle.png';
import '../stylesheets/content.css';

export default function Content() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='bg-white folderContainer'>
        <div className='flex justify-between border-b-2 border-black'>
          <h4 className='pl-1 text-brown'>/home/welcome</h4>
          <div className='flex items-center'>
            <Image src={blueCircle} alt='blue-circle' width={20} height={20} />
            <Image src={brownCircle} alt='blue-circle' width={20} height={20} />
          </div>
        </div>
        <div className='container p-5 pb-40 w-max text-white bg-brown'>
          <h1 className=''>Fernando Ouviña</h1>
          <h2 className=''>Front End Developer</h2>
        </div>
      </div>
    </main>
  );
}
