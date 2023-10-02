import React from "react";
import Qualification from "../components/qualification/Qualification";
import Projects from "../components/projects/Projects";

function Portfolio({ isDarkTheme }) {
 

  return (
    <main>
      <Qualification />
      <Projects />
    </main>
  );
}

export default Portfolio;
