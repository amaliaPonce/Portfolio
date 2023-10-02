import React from "react";
import Qualification from "../components/qualification/Qualification";
import Projects from "../components/projects/Projects";

function Portfolio({ toggleTheme, isDarkTheme }) {
  const bodyClasses = `portfolio-body ${isDarkTheme ? "dark-theme" : ""}`;

  return (
    <body className={bodyClasses}>
      <Qualification />
      <Projects />
    </body>
  );
}

export default Portfolio;
