import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; 
import i18n from './config/i18n'; 
import RoutesApp from './routesApp';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}> 
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <RoutesApp toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
