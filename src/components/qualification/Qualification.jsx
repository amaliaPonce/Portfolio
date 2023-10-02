import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: "smooth" });
  };
  const { t } = useTranslation();


  return (
    <section className="qualification section">
      <h2 className="section__title">{t('qualification.title')}</h2>
      <span className="section__subtitle">{t('qualification.subtitle')}</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            {t("qualification.button.one")}
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            {t("qualification.button.two")}
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">            {t("qualification.education.one")}
</h3>
                <span className="qualification__subtitle">{t("qualification.education.description.one")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t("qualification.education.year.one")}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> {t("qualification.education.two")}</h3>
                <span className="qualification__subtitle">{t("qualification.education.description.two")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t("qualification.education.year.two")}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("qualification.education.three")}</h3>
                <span className="qualification__subtitle">{t("qualification.education.description.three")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t("qualification.education.year.two")}
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t("qualification.education.four")}</h3>
                <span className="qualification__subtitle">{t("qualification.education.description.four")}</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t("qualification.education.year.two")}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trabajo 1</h3>
                <span className="qualification__subtitle">Subtitulo 1</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Trabajo 2</h3>
                <span className="qualification__subtitle">Subtitulo 2</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trabajo 3</h3>
                <span className="qualification__subtitle">Subtitulo 3</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-button up-button" onClick={scrollToTop}>
        <i className="bx bx-up-arrow-alt"></i>
      </button>

      <button className="scroll-button down-button" onClick={scrollToBottom}>
        <i className="bx bx-down-arrow-alt"></i>
      </button>
    </section>
  );
};

export default Qualification;
