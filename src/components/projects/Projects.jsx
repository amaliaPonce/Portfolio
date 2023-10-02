import React from "react";
import "./project.css";
import { TranslatedData } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Importa Link de React Router
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const dataToUse = TranslatedData();
  const { t } = useTranslation();

  return (
    <section className="projects container section">
      <h2 className="section__title">{t("projects.title")}</h2>
      <span className="section__subtitle">{t("projects.subtitle")}</span>

      <Swiper
        className="projects__container"
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {dataToUse.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="project__card" key={id}>
              <Link to={"https://github.com/amaliaPonce"} className="project__link"> 
                <img src={image} alt="" className="project__img" />
                <h3 className="project__name">{title}</h3>
                <p className="project__description">{description}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
