import About from './about';
import AudioPlayer from './audioPlayer';
import Blog from './blog';
import Contact from './contact';
import DesktopIcons from './desktopIcons';
import Projects from './projects';
import ThemeCard from './themeCard';
import WelcomeCard from './welcomeCard';

export default function Content() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <section className='fixed top-0'>
        <DesktopIcons />
      </section>

      <section className='flex flex-col justify-center items-center'>
        <WelcomeCard />
        <About />
        <Projects />
        <Contact />
        <Blog />
        <AudioPlayer />
        <ThemeCard />
      </section>
    </main>
  );
}
