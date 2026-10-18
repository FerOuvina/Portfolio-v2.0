'use client';

import Card from './card';
import { useI18n } from '@/context/i18nContext';
import '../stylesheets/languageCard.css';

export default function LanguageCard() {
  const { locale, setLocale, t, locales } = useI18n();

  return (
    <Card
      navTitle={t('paths.language')}
      contentFirst={t('language.label')}
      contentH2={t('language.choose')}
      id='languageCard'
      minWidth={280}
      maxWidth={380}>
      <div className='language-grid'>
        {locales.map((code) => (
          <button
            key={code}
            type='button'
            onClick={() => setLocale(code)}
            className={`language-button ${locale === code ? 'active' : ''}`}
            title={t(`language.options.${code}`)}
            role='option'
            aria-selected={code === locale}>
            <span>{t(`language.options.${code}`)}</span>
            {locale === code && <span className='language-check'>✓</span>}
          </button>
        ))}
      </div>
    </Card>
  );
}