import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Importar I18nextProvider
import i18n from './config/i18n'; 
import RoutesApp from './routesApp';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const bodyClasses = `portfolio-body ${isDarkTheme ? "dark-theme" : ""}`;


  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}> 
        <body className={`${bodyClasses} ${isDarkTheme ? 'dark-theme' : ''}`}>
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <RoutesApp toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </body>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
