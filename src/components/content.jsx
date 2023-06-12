import About from './about';
import Blog from './blog';
import Contact from './contact';
import DesktopIcons from './desktopIcons';
import Projects from './projects';
import WelcomeCard from './welcomeCard';

export default function Content() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <section className='fixed top-0'>
        <DesktopIcons />
      </section>

      <section className='flex flex-col justify-center items-center'>
        {/* Presentation Card */}
        <WelcomeCard />

        {/* About Card */}
        <About />

        {/* Projects Card */}
        <Projects />

        {/* Contact Card */}
        <Contact />

        {/* Blog Card */}
        <Blog />
      </section>
    </main>
  );
}
