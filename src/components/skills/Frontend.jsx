import React from "react";
import { useTranslation } from "react-i18next";

const Frontend = () => {
  const { t } = useTranslation();

  return (
    <div className="skills__content">
      <h3 className="skills__tittle">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">
                {t("skills.level.advanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">
                {t("skills.level.intermediate")}
              </span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavasCript</h3>
              <span className="skills__level">
                {t("skills.level.intermediate")}
              </span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootsrap</h3>
              <span className="skills__level">{t("skills.level.basic")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">{t("skills.level.basic")}</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">
                {t("skills.level.advanced")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
