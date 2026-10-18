import Card from './card';
import Image from 'next/image';
import Button from './button';
import Link from 'next/link';
import linkedInLogo from '../assets/logos/LinkedIn-Logo.svg';
import linkedInLogoWhite from '../assets/logos/LinkedIn-Logo-white.svg';
import gitHubLogo from '../assets/logos/GitHub-Logo.svg';
import gitHubLogoWhite from '../assets/logos/GitHub-Logo-white.svg';
import emailLogo from '../assets/logos/email-logo.svg';
import emailLogoWhite from '../assets/logos/email-logo-white.svg';
import { useTheme } from '@/context/themeContext';
import { useI18n } from '@/context/i18nContext';
import '../stylesheets/contactYes.css';

export default function ContactYes() {
  const { theme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === 'dark' || theme === 'midnight' || theme === 'sunset' || theme === 'ocean' || theme === 'forest';
  const linkedInSrc = isDark ? linkedInLogoWhite : linkedInLogo;
  const gitHubSrc = isDark ? gitHubLogoWhite : gitHubLogo;
  const emailSrc = isDark ? emailLogoWhite : emailLogo;
  return (
    <Card
      navTitle={t('paths.contactSuccess')}
      contentFirst={[
        <div key={`contactYesContainer`} className='text-center'>
          <span>{t('contactYes.nicelyDone')}</span>
        </div>
      ]}
      contentH1={[
        <div key={`contactYesContainer-1`} className='text-center'>
          <span>{t('contactYes.fillForm')}</span>
        </div>
      ]}
      id={'contactYes'}
      minWidth={300}
      maxWidth={400}>
      <div className='container bg-[var(--card-bg)] text-darkBrown formContainer'>
        <form
          className='flex flex-col gap-2 p-4'
          action='https://formsubmit.co/contactfernando07@gmail.com'
          method='POST'>
          <div className='flex w-full p-1 form-group bg-aquaGreen'>
            <label htmlFor='name'>{t('contactYes.name')}:</label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex w-full p-1 form-group bg-aquaGreen'>
            <label htmlFor='email'>{t('contactYes.email')}:</label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex flex-col w-full p-1 form-group bg-aquaGreen'>
            <label htmlFor='message'>{t('contactYes.message')}:</label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex items-center justify-center w-full'>
            <Button type='submit' className='px-10 py-1 text-center text-[var(--menu-text)]'>
              {t('contactYes.send')}
            </Button>
          </div>

          <input
            type='hidden'
            name='_next'
            value={`https://ouvina-fernando.vercel.app/thankyou`}
          />
        </form>
      </div>
      <div className='container bg-[var(--card-bg)] text-darkBrown px-4'>
        <h2 className='text-[var(--menu-text)]'>
{t('contactYes.alternatively')}
        </h2>
        <ul className='flex flex-row justify-around w-full py-1'>
          <li>
            <Link
              legacyBehavior
              href={'https://www.linkedin.com/in/contactfernando07/'}
              referrerPolicy='no-referrer'>
              <a target='_blank'>
                <Image
                  src={linkedInSrc}
                  alt='linkedIn logo'
                  width={35}
                  height={35}
                  title='LinkedIn'
                />
              </a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              href={'https://github.com/FerOuvina'}
              referrerPolicy='no-referrer'>
              <a target='_blank'>
                <Image
                  src={gitHubSrc}
                  alt='github logo'
                  width={30}
                  height={30}
                  title='Github'
                />
              </a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              href={'mailto:contactfernando07@gmail.com'}
              referrerPolicy='no-referrer'>
              <a target='_blank'>
                <Image
                  src={emailSrc}
                  alt='Email logo'
                  width={35}
                  height={35}
                  title='Email'
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Card>
  );
}
