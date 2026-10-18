import { useI18n } from '@/context/i18nContext';
import ButtonContactNo from './button-contactNo';
import Card from './card';

export default function ContactNo() {
  const { t } = useI18n();
  return (
    <Card
      navTitle={t('paths.contactFailed')}
      contentFirst={[
        <div
          key={`contactNoContainer`}
          className='flex flex-col justify-center items-center bg-[var(--card-bg)]'
        >
          <span>{t('contactNo.compromised')}</span>
        </div>,
      ]}
      contentH1={[
        <span
          key={`contactNo-span`}
          className='flex justify-center items-center text-center'
        >
          {t('contactNo.selfDestruct')}
        </span>,
      ]}
      id={'contactNo'}
      minWidth={300}
      maxWidth={350}
    >
      <ButtonContactNo />
    </Card>
  );
}
