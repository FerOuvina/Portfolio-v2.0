import Card from './card';
import waiting from '../assets/waiting.gif';
import Image from 'next/image';

export default function Blog() {
  return (
    <Card
      navTitle={'/blog/entries'}
      contentFirst={'This is still a WIP'}
      contentH1={[
        <div key={'waos'} className='flex justify-center items-center'>
          <Image src={waiting} alt='waiting' />
        </div>,
      ]}
      id={'blog'}
      width={300}
    ></Card>
  );
}
