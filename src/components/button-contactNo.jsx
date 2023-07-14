import { gsap } from 'gsap';
import useSound from 'use-sound';
import useObserver from '@/hooks/useObserver';
import '../stylesheets/button-contactNo.css';

export default function ButtonContactNo() {
  const isIntersecting = useObserver('contactNo');
  const [playAlert, { stop }] = useSound('/sounds/Alert.mp3', {
    volume: 0.2,
    playbackRate: 0.95,
  });
  isIntersecting ? playAlert() : stop();

  const handleClick = () => {
    gsap.to('#contactNo', {
      duration: 0.3,
      opacity: 0,
      scale: 0,
      display: 'none',
    });
  };

  return (
    <div className='pt-4'>
      <button className='depth' onClick={handleClick}></button>
    </div>
  );
}
