import React from 'react';
import Social from './Social'; 
import Data from './Data';

import './home.css'; 

const Home = ({ isDarkTheme }) => {
  const homeClasses = `home section ${isDarkTheme ? 'dark-theme' : ''}`;

  return (
    <section className={homeClasses} id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
        <Social isDarkTheme={isDarkTheme} />
          <div className="home__img"></div>
          <Data isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </section>
  );
};

export default Home;
