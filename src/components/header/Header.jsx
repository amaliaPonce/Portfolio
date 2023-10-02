import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../config/i18n';

const Header = ({ toggleTheme, isDarkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true); // Estado para alternar el idioma

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerClasses = `header ${isDarkTheme ? 'dark-theme' : ''}`;

  const toggleLanguage = () => {
    // Cambiar el estado para alternar el idioma
    setIsEnglish(!isEnglish);
    // Cambiar el idioma de i18n
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <header className={headerClasses}>
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          {t('header.logo')}
        </Link>
        <div className={menuOpen ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                {t('header.home')}
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                {t('header.about')}
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                {t('header.skills')}
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                {t('header.services')}
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                {t('header.portfolio')}
              </Link>
            </li>
            <li className="nav__item contact-item">
              <Link to="/contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                {t('header.contact')}
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>

        <div className="container-theme">
          <label className="toggle" htmlFor="switch">
            <input
              id="switch"
              className="input"
              type="checkbox"
              onChange={toggleTheme}
            />
            <div className="icon icon--moon">
              <svg
                height="16"
                width="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="icon icon--sun">
              <svg
                height="16"
                width="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 00-1.061 1.061l1.591 1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>

        <div className="language-toggle">
          <button
            className="languageButton"
            onClick={toggleLanguage}
          >
            {isEnglish ? 'Es' : 'En'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
