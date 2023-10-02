import React, { useState } from "react";
import "./services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { t } = useTranslation();

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services.title")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>
      <div className="services__container container grid">
        <div className="service__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="services__title">{t("services.title.one")}</h3>

          <span className="services__button" onClick={() => toggleTab(1)}>
            {t("services.title.button")}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times service__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {t("services.title.one")}
              </h3>
              <p className="services__modal-description">
                {t("services.description.one")}
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.productDesigner.one")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.productDesigner.two")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    {t("services.list.productDesigner.three")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.productDesigner.four")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.productDesigner.five")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">{t("services.title.two")}</h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
            {t("services.title.button")}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times service__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {t("services.title.two")}
              </h3>
              <p className="services__modal-description">
                {t("services.description.two")}
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.uiux.one")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {t("services.list.uiux.two")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.uiux.three")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.uiux.four")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.uiux.five")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">{t("services.title.three")}</h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
            {t("services.title.button")}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times service__modal-close"
              ></i>
              <h3 className="services__modal-title">            {t("services.title.three")}
</h3>
              <p className="services__modal-description">
              {t("services.description.three")}
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.visual.one")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.visual.two")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    {t("services.list.visual.three")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.visual.four")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services.list.visual.five")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
