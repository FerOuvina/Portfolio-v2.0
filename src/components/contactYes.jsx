import Card from './card';
import Image from 'next/image';
import Button from './button';
import Link from 'next/link';
import linkedInLogo from '../assets/logos/LinkedIn-Logo.svg';
import gitHubLogo from '../assets/logos/GitHub-Logo.svg';
import emailLogo from '../assets/logos/email-logo.svg';
import '../stylesheets/contactYes.css';

export default function ContactYes() {
  return (
    <Card
      navTitle={'/contact/contact-success'}
      contentFirst={[
        <div key={`contactYesContainer`} className='text-center'>
          <span>Nicely done!</span>
        </div>
      ]}
      contentH1={[
        <div key={`contactYesContainer-1`} className='text-center'>
          <span>Now please fill this form</span>
        </div>
      ]}
      id={'contactYes'}
      minWidth={300}
      maxWidth={400}>
      <div className='container bg-white text-darkBrown formContainer'>
        <form
          className='flex flex-col gap-2 p-4'
          action='https://formsubmit.co/contactfernando07@gmail.com'
          method='POST'>
          <div className='flex p-1 w-full form-group bg-aquaGreen'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex p-1 w-full form-group bg-aquaGreen'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex flex-col p-1 w-full form-group bg-aquaGreen'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-aquaGreen'
            />
          </div>

          <div className='flex justify-center items-center w-full'>
            <Button type='submit' className='px-10 py-1 text-center text-brown'>
              Send
            </Button>
          </div>

          <input
            type='hidden'
            name='_next'
            value={`https://ouvina-fernando.vercel.app/thankyou`}
          />
        </form>
      </div>
      <div className='container bg-white text-darkBrown px-4'>
        <h2>
          Alternatively you can contact me through my socials or my e-mail
        </h2>
        <ul className='w-full justify-around py-1 flex flex-row'>
          <li>
            <Link
              legacyBehavior
              href={'https://www.linkedin.com/in/fernando07'}
              referrerPolicy='no-referrer'>
              <a target='_blank'>
                <Image
                  src={linkedInLogo}
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
                  src={gitHubLogo}
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
                  src={emailLogo}
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
