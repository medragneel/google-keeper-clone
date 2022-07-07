import React, { useContext } from 'react';
import { ThemeContext } from './context/themecontext';
export default function PageContent({ children }) {
  const { isDark } = useContext(ThemeContext);
  const styles = {
    paddingTop: '20px',
    backgroundColor: isDark ? '#333' : '#fff',
    width: '100vw',
    height: 'auto',
  };
  return <div style={styles}>{children}</div>;
}
