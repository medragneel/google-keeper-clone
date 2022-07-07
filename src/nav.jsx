import React, { useContext } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from './context/themecontext';
export default function Nav() {
  const { isDark, toggleDark } = useContext(ThemeContext);
  return (
    <header
      style={{
        width: '100vw',
        backgroundColor: '#fbbc04',
        height: '4em',
      }}
    >
      {isDark ? (
        <WbSunnyIcon
          onClick={toggleDark}
          style={{ float: 'right', padding: '22px 30px', color: '#fff' }}
        />
      ) : (
        <DarkModeIcon
          onClick={toggleDark}
          style={{ float: 'right', padding: '22px 30px', color: '#fff' }}
        />
      )}
      <h1 style={{ margin: '0px', padding: '12px 15px', color: '#fff' }}>
        Keeper
      </h1>
    </header>
  );
}
