import { useState, useEffect } from 'react';
import NavbarBigScreen from './navbarBigScreen';
import NavbarSmallScreen from './navbarSmallScreen';

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return <NavbarBigScreen />;
  } else {
    return <NavbarSmallScreen />;
  }
}
