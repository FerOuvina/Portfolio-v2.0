import Card from './card';
import { useI18n } from '@/context/i18nContext';
import Image from 'next/image';
import waiting from '../assets/images/waiting.gif';

export default function Blog() {
  const { t } = useI18n();
  return (
    <Card
      navTitle={t('paths.blog')}
      contentFirst={t('blog.wip')}
      contentH1={[
        <div key={'waos'} className='flex justify-center items-center'>
          <Image src={waiting} alt='waiting' />
        </div>,
      ]}
      id={'blog'}
      minWidth={300}
      maxWidth={300}
      ></Card>
  );
}
