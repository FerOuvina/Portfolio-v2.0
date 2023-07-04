import { useRef } from 'react';
import { gsap } from 'gsap';
import '../stylesheets/button.css';

export default function Button({ children, ...props }) {
  const ref = useRef();
  const handleMouseEnter = () => {
    gsap.to(ref.current, {
      x: -2,
      y: -2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <button
        className={`mainButton text-brown ${props.className}`}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
}
