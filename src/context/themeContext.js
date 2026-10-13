'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = ['light', 'dark', 'ocean', 'forest', 'sunset'];

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  themes: THEMES
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored && THEMES.includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      ...THEMES.map((t) => `theme-${t}`)
    );
    if (theme !== 'light') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
