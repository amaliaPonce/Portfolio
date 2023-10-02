import React from "react";
import Info from "./Info";
import "../about/about.css";
import AboutImg from "../../assets/image-cv.JPG";
import CV from "../../assets/CV-AMALIA.pdf";
import { useTranslation } from "react-i18next";

const About = ({ isDarkTheme }) => {
  const aboutClasses = `about section ${isDarkTheme ? "dark-theme" : ""}`;
  const buttonClasses = `button button--flex ${
    isDarkTheme ? "dark-theme" : ""
  }`;
  const { t } = useTranslation();

  return (
    <section className={aboutClasses} id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">{t("about.description.one")}</p>
          <p className="about__description">{t("about.description.two")}</p>

          <a download="" href={CV} className={buttonClasses}>
            {t("about.downloadCvButton")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="#ffffff"
            >
              <path d="m19.949,5.536l-3.484-3.486c-1.323-1.322-3.081-2.05-4.95-2.05h-4.515C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-8.515c0-1.871-.729-3.628-2.051-4.95Zm-1.414,1.415c.318.317.587.67.805,1.05h-4.341c-.552,0-1-.449-1-1V2.659c.38.218.733.487,1.051.805l3.484,3.486Zm1.465,12.05c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4.515c.163,0,.325.008.485.023v4.977c0,1.654,1.346,3,3,3h4.977c.015.16.023.322.023.485v8.515Zm-4.293-2.895c.391.39.391,1.023,0,1.414l-1.613,1.614c-.577.577-1.336.866-2.094.866s-1.517-.289-2.094-.866l-1.613-1.614c-.391-.391-.391-1.024,0-1.414.391-.391,1.023-.391,1.414,0l1.293,1.293v-4.398c0-.552.447-1,1-1s1,.448,1,1v4.398l1.293-1.293c.391-.391,1.023-.391,1.414,0Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
