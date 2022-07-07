import React, { createContext } from 'react';
import useToggle from '../hooks/usetoggle';
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, toggleDark] = useToggle(false);
  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
