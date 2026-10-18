import Card from './card';
import Link from 'next/link';
import Image from 'next/image';
import gitHubLogo from '../assets/logos/GitHub-Logo.svg';
import gitHubLogoWhite from '../assets/logos/GitHub-Logo-white.svg';
import linkedInLogo from '../assets/logos/LinkedIn-Logo.svg';
import linkedInLogoWhite from '../assets/logos/LinkedIn-Logo-white.svg';
import blogLogo from '../assets/logos/Blog-Logo.svg';
import blogLogoWhite from '../assets/logos/Blog-Logo-white.svg';
import { useTheme } from '@/context/themeContext';
import { useI18n } from '@/context/i18nContext';

export default function WelcomeCard() {
  const { theme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === 'dark' || theme === 'midnight' || theme === 'sunset' || theme === 'ocean' || theme === 'forest';
  const linkedInSrc = isDark ? linkedInLogoWhite : linkedInLogo;
  const gitHubSrc = isDark ? gitHubLogoWhite : gitHubLogo;
  const blogSrc = isDark ? blogLogoWhite : blogLogo;
  return (
    <Card
      navTitle={t('paths.welcome')}
      contentFirst={[
        <span key={'welcomeCard-mainTitle'} className='text-lg'>
          {t('welcomeCard.title')}
        </span>
      ]}
      contentH1={[
        <span key={'welcomeCard-title'} className='text-lg font-bold'>
          {t('welcomeCard.name')},
        </span>,
        <br key={'welcomeCard-title-br'} />,
        <span
          key={'welcomeCard-title2'}
          className='text-lg font-bold underline'>
          {t('welcomeCard.role')}
        </span>
      ]}
      contentText={[
        t('welcomeCard.intro'),
        <a
          key={'welcomeCard-git'}
          target='_blank'
          href='https://github.com/FerOuvina'
          className='font-bold underline'>
          Github
        </a>,
        t('welcomeCard.introAfterGithub'),
        <br key={'welcomeCard-br'} />,
        t('welcomeCard.alsoCheck'),
        <a
          key={'welcomeCard-linkedIn'}
          target='_blank'
          href='https://www.linkedin.com/in/contactfernando07/'
          className='font-bold underline'>
          LinkedIn
        </a>,
        t('welcomeCard.i'),
        <em key={'welcomeCard-sometimes'} className='underline'>
{t('welcomeCard.sometimes')}
        </em>,
        t('welcomeCard.postAbout'),
        <br key={'welcomeCard-br2'} />,
        t('welcomeCard.andDontForget'),
        <em key={'welcomeCard-wip'} className='underline'>
          {t('welcomeCard.maybeOneDay')}
        </em>,
        t('welcomeCard.blogClosing')
      ]}
      minWidth={300}
      maxWidth={400}
      id={'welcomeCard'}>
      <footer className='container bg-[var(--card-bg)]'>
        <ul className='flex justify-around p-2 text-brown'>
          <Link
            legacyBehavior
            href={'https://github.com/FerOuvina'}
            referrerPolicy='no-referrer'>
            <a target='_blank'>
              <li title={t('welcomeCard.githubProfile')}>
                <Image
                  src={gitHubSrc}
                  alt='github logo'
                  width={30}
                  height={30}
                  title='Github'
                />
              </li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'https://www.linkedin.com/in/contactfernando07/'}
            referrerPolicy='no-referrer'>
            <a target='_blank'>
              <li title={t('welcomeCard.linkedInProfile')}>
                <Image
                  src={linkedInSrc}
                  alt='linkedIn logo'
                  width={30}
                  height={30}
                  title='LinkedIn'
                />
              </li>
            </a>
          </Link>
          <Link
            legacyBehavior
            href={'example.com'}
            referrerPolicy='no-referrer'>
            <a target='_blank'>
              <li title={t('welcomeCard.personalBlog')}>
                <Image
                  src={blogSrc}
                  alt='blog logo'
                  width={30}
                  height={30}
                  title='Blog'
                />
              </li>
            </a>
          </Link>
        </ul>
      </footer>
    </Card>
  );
}
