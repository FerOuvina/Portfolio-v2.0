import { createContext, useState } from 'react';

const ZIndexContext = createContext(0);

export function ZIndexProvider({ children }) {
  const [zIndex, setZIndex] = useState(0);

  return (
    <ZIndexContext.Provider value={{ zIndex, setZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
}

export default ZIndexContext;
