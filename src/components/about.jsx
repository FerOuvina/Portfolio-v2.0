import Card from './card';

export default function About() {
  return (
    <Card
      navTitle={`/specifications/about`}
      contentTitle={`I'm a passionate web developer who loves to create beautiful and functional websites, and applications. I'm currently looking for opportunities to grow my skills and a chance to start my career as a developer.`}
      contentH1={`This is my current stack`}
      id={`specificationsCard`}
      width={300}
    >
      <footer></footer>
    </Card>
  );
}
