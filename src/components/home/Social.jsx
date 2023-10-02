import React from "react";

const Social = ({ isDarkTheme }) => {
  const buttonClasses = `home__social-icon ${
    isDarkTheme ? "dark-theme-button" : ""
  }`;
  const homeDataClass = `home__social ${isDarkTheme ? "dark-theme" : ""}`;

  return (
    <div className={homeDataClass}>
      <a
        href="https://www.instagram.com/amaliponce"
        className={buttonClasses}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram-alt"></i>
      </a>

      <a
        href="https://github.com/amaliaPonce"
        className={buttonClasses}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
