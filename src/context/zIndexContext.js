import { createContext, useEffect, useRef, useState } from 'react';
import { registerZIndexController } from '@/utils/zIndexController';

const ZIndexContext = createContext(0);

export function ZIndexProvider({ children }) {
  const [zIndex, setZIndex] = useState(0);
  const zIndexRef = useRef(zIndex);
  zIndexRef.current = zIndex;

  useEffect(() => {
    registerZIndexController({
      next: () => {
        const nextZIndex = zIndexRef.current + 1;
        zIndexRef.current = nextZIndex;
        setZIndex(nextZIndex);
        return nextZIndex;
      },
    });
    return () => registerZIndexController({ next: () => 0 });
  }, []);

  return (
    <ZIndexContext.Provider value={{ zIndex, setZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
}

export default ZIndexContext;
