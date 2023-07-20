import Card from './card';
import Button from './button';
import '../stylesheets/contactYes.css';

export default function ContactYes() {
  return (
    <Card
      navTitle={'/contact/contact-success'}
      contentFirst={[
        <div key={`contactYesContainer`} className='text-center'>
          <span>Nicely done!</span>
        </div>,
      ]}
      contentH1={[
        <div key={`contactYesContainer-1`} className='text-center'>
          <span>Now please fill this form</span>
        </div>,
      ]}
      id={'contactYes'}
      width={300}
    >
      <div className='container bg-white text-darkBrown formContainer'>
        <form
          className='flex flex-col gap-2 p-4'
          action='https://formsubmit.co/contactfernando07@gmail.com'
          method='POST'
        >
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
    </Card>
  );
}
