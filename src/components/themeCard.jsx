'use client';

import Card from './card';
import { useTheme } from '@/context/themeContext';
import { useI18n } from '@/context/i18nContext';
import '../stylesheets/themeCard.css';

const themeOptions = [
  { id: 'light', label: 'Classic', color: '#d4d0c8' },
  { id: 'dark', label: 'Midnight', color: '#2b2b2b' },
  { id: 'ocean', label: 'Ocean', color: '#1a4a5e' },
  { id: 'forest', label: 'Forest', color: '#2d5a3d' },
  { id: 'sunset', label: 'Sunset', color: '#5e3a2a' },
  { id: 'yellow', label: 'Honey', color: '#e0b64a' }
];

export default function ThemeCard() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();

  return (
    <Card
      navTitle='/settings/themes'
      contentFirst={t('themeCard.appearance')}
      contentH2={t('themeCard.chooseTheme')}
      id='themesCard'
      minWidth={280}
      maxWidth={380}>
      <div className='theme-grid'>
        {themeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            className={`theme-button ${theme === option.id ? 'active' : ''}`}
            title={t(`themeCard.themes.${option.id}`)}>
            <span
              className='theme-swatch'
              style={{ backgroundColor: option.color }}
            />
            <span className='theme-label'>
              {t(`themeCard.themes.${option.id}`)}
            </span>
            {theme === option.id && (
              <span className='theme-check'>✓</span>
            )}
          </button>
        ))}
      </div>
    </Card>
  );
}
