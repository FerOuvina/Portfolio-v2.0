'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from '@/i18n/dictionaries/en';
import es from '@/i18n/dictionaries/es';

export const DICTIONARIES = { en, es };
export const LOCALES = Object.keys(DICTIONARIES);
export const DEFAULT_LOCALE = 'en';

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
  locales: LOCALES
});

const resolve = (dictionary, path) =>
  path.split('.').reduce((value, segment) => {
    if (value === undefined || value === null) return undefined;
    return value[segment];
  }, dictionary);

const interpolate = (template, values = {}) =>
  template.replace(/\{(\w+)\}/g, (match, key) =>
    values[key] === undefined ? match : values[key]
  );

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem('locale');
    if (stored && DICTIONARIES[stored]) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale) => {
    if (DICTIONARIES[nextLocale]) {
      setLocaleState(nextLocale);
    }
  }, []);

  const t = useCallback(
    (key, values) => {
      const dictionary = DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
      const fallback = DICTIONARIES[DEFAULT_LOCALE];
      const template = resolve(dictionary, key) ?? resolve(fallback, key);

      if (typeof template !== 'string') return key;
      return interpolate(template, values);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, locales: LOCALES }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

export default I18nContext;