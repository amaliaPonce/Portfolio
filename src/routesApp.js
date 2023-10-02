import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Portfolio from "./pages/Portfolio";

function RoutesApp({ isDarkTheme, toggleTheme }) {
  return (
    <Routes>
<Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
      <Route
        path="/about"
        element={<About isDarkTheme={isDarkTheme} />}
      />
      <Route
        path="/skills"
        element={<Skills isDarkTheme={isDarkTheme} />}
      />
      <Route
        path="/services"
        element={<Services isDarkTheme={isDarkTheme} />}
      />
      <Route
        path="/contact"
        element={<Contact isDarkTheme={isDarkTheme} />}
      />
      <Route
        path="/portfolio"
        element={<Portfolio isDarkTheme={isDarkTheme} />}
      />
    </Routes>
  );
}

export default RoutesApp;
