import ButtonContactNo from './button-contactNo';
import Card from './card';

export default function ContactNo() {
  return (
    <Card
      navTitle={'/contact/contact-failed'}
      contentFirst={[
        <div
          key={`contactNoContainer`}
          className='flex flex-col justify-center items-center bg-white'
        >
          <span>System Compomised</span>
        </div>,
      ]}
      contentH1={`This device will self destruct unless you press the big red button below`}
      id={'contactNo'}
      width={300}
    >
      <ButtonContactNo />
    </Card>
  );
}
