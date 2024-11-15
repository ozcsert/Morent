import { useContext, useState, useEffect } from 'react';
import Sun from '@/app/images/themeshifter/Sun1.svg';
import Moon from '@/app/images/themeshifter/NIGHT4.svg';
import Cyber from '@/app/images/themeshifter/NIGHT3.svg';
import Nature from '@/app/images/themeshifter/NATURE.svg';

import Pro from '@/app/images/themeshifter/PRO.svg';

import './styles.scss';
import { ThemeContext } from '@/app/context/ThemeContext';

type ThemeType = 'light' | 'dark' | 'cyberpunk' | 'nature' | 'professional';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function ThemeShifter() {
  const { theme, setTheme } = useTheme();
  const [currentPosition, setCurrentPosition] = useState(1);

  const positionToTheme: Record<number, ThemeType> = {
    1: 'light',
    2: 'dark',
    3: 'cyberpunk',
    4: 'nature',
    5: 'professional',
  };

  const handleShiftChange = (position: number) => {
    setCurrentPosition(position);
    setTheme(positionToTheme[position]);
  };

  useEffect(() => {
    const position = Object.entries(positionToTheme).find(
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      ([_, t]) => t === theme
    )?.[0];
    if (position) {
      setCurrentPosition(Number(position));
    }
  }, [theme]);

  return (
    <div className="shifter-container">
      <div className="h-pattern-shifter">
        {/* H-pattern base */}
        <svg
          className="shift-pattern"
          viewBox="0 0 250 200"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="2"
                dy="2"
                stdDeviation="3"
                floodColor="var(--text-tertiary)"
                floodOpacity="0.3"
              />
            </filter>

            <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="2"
                dy="2"
                stdDeviation="3"
                floodColor="var(--text-tertiary)"
                floodOpacity="0.3"
              />
            </filter>
          </defs>

          <path
            d="M60,40 L60,160 M110,40 L110,120 M110,160 L110,110 M160,30 L160,100"
            className="pattern-line"
            filter="url(#shadow1)"
            stroke="var(--text-primary)"
          />

          <path
            d="M60,100 L150,100 M150,100 L166,100"
            className="pattern-line"
            stroke="var(--text-primary)"
          />
        </svg>

        {/* Theme positions with alternating Sun/Moon icons */}
        <div
          className={`shift-position pos-1 ${currentPosition === 1 ? 'active' : ''}`}
        >
          <Sun onClick={() => handleShiftChange(1)} aria-label="Light Theme" />
        </div>

        <div
          className={`shift-position pos-2 ${currentPosition === 2 ? 'active' : ''}`}
        >
          <Nature
            onClick={() => handleShiftChange(2)}
            aria-label="Dark Theme"
          />
        </div>

        <div
          className={`shift-position pos-3 ${currentPosition === 3 ? 'active' : ''}`}
        >
          <Cyber
            onClick={() => handleShiftChange(3)}
            aria-label="Cyberpunk Theme"
          />
        </div>

        <div
          className={`shift-position pos-4 ${currentPosition === 4 ? 'active' : ''}`}
        >
          <Moon
            onClick={() => handleShiftChange(4)}
            aria-label="Nature Theme"
            style={{ fill: 'var(--text-primary)' }}
          />
        </div>

        <div
          className={`shift-position pos-5 ${currentPosition === 5 ? 'active' : ''}`}
        >
          <Pro
            onClick={() => handleShiftChange(5)}
            aria-label="Professional Theme"
            style={{ fill: 'var(--text-primary)' }}
          />
        </div>

        {/* Shift knob */}
        <div
          className={`shift-knob position-${currentPosition}`}
          style={{ backgroundColor: 'var(--clr-primary)' }}
        />
      </div>

      {/* Theme labels */}
      <div className="theme-labels">
        <span style={{ color: 'var(--text-primary)' }}>Light</span>
        <span style={{ color: 'var(--text-primary)' }}>Dark</span>
        <span style={{ color: 'var(--text-primary)' }}>Cyberpunk</span>
        <span style={{ color: 'var(--text-primary)' }}>Nature</span>
        <span style={{ color: 'var(--text-primary)' }}>Professional</span>
      </div>
    </div>
  );
}

export default ThemeShifter;
