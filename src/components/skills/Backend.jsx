import React from "react";
import { useTranslation } from "react-i18next";

const Backend = () => {
  const { t } = useTranslation();

  return (
    <div className="skills__content">
      <h3 className="skills__tittle">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">
                {t("skills.level.advanced")}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">{t("skills.level.basic")}</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
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

export default Backend;
