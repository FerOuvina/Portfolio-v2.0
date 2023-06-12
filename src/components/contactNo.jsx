import Card from './card';

export default function ContactNo() {
  return (
    <Card
      navTitle={'/contact/contact-failed'}
      contentFirst={[
        <div
          key={`contactNoContainer`}
          className='flex flex-col justify-center items-center'
        >
          <span>You choose wrong!</span>
        </div>,
      ]}
      contentH1={[
        `This device will self destruct now`,
        <br key={'contactFailded-br'} />,
        <br key={'contactFailded-br1'} />,
        `Unless you press the big red button below`,
      ]}
      id={'contactNo'}
      width={300}
    ></Card>
  );
}
