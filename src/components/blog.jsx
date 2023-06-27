import Card from './card';
import Image from 'next/image';
import waiting from '../assets/images/waiting.gif';

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
