import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';

import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hemgn3e",
        "template_lwfjnmg",
        form.current,
        "tFySpVVghg9lWf5sE"
      )
      e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contact.title")}</h2>
      <span className="section__subtitle">{t("contact.subtitle")}</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.card.title")}</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact__card-data">693-797-937</span>

              <a
                href="aquivaelenlaceSendmedewhatsap"
                className="contact__button"
              >
                {t("contact.card.button")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-send contact__card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact__card-data">amaliaponcetoledo@gmail.com</span>

              <a href="mailto:example@email.com" className="contact__button">
                {t("contact.card.button")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-discord contact__card-icon"></i>
              <h3 className="contact_card-title">Discord</h3>
              <span className="contact__card-data">amaliaponce</span>

              <a href="aquivaelenlacedeDiscord" className="contact__button">
              {t("contact.card.button")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.form.title")}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">{t("contact.form.label.one")}</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder={t("contact.form.label.one.placeholder")}
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder={t("contact.form.label.two.placeholder")}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">{t("contact.form.label.three")}</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder={t("contact.form.label.three.placeholder")}
              ></textarea>
            </div>
            <button
              href="mailto:amaliaponcetoledo@gmail.com"
              className="button button--flex"
            >
              <span>{t("contact.form.button")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="#ffffff"
              >
                <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
