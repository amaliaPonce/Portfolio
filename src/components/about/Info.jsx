import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">{t("about.title.card.one")}</h3>
        <span className="about__subtitle">{t("about.subtitle.card.one")}</span>
      </div>
      <div className="about__box ">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">{t("about.title.card.two")}</h3>
        <span className="about__subtitle">{t("about.subtitle.card.two")}</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">{t("about.title.card.three")}</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
