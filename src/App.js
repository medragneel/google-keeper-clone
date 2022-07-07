import React from 'react';
import Nav from './nav';
import KeepList from './keepList';
import './style.css';
import { ThemeProvider } from './context/themecontext';
import PageContent from './pc';
export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <ThemeProvider>
        <Nav />
        <PageContent>
          <KeepList />
        </PageContent>
      </ThemeProvider>
    </div>
  );
}
