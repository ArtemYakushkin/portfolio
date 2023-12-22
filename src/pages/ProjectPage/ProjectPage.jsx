import React from "react";
import { useTranslation } from "react-i18next";
import "./projectPage.css";
import { projectsData } from "../../db/projectsData";
import Slider from "../../components/Slider/Slider";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="project"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="project-title">
        {t("myProj")} <span>{t("successe")}</span> {t("andProj")}{" "}
        <span>{t("failure")}</span>
      </h2>
      <ul className="project-list">
        {projectsData.map((slide) => (
          <li className="project-item" key={slide.id}>
            <Slider slide={slide} />
          </li>
        ))}
        <li className="project-list-text">To be continued...</li>
      </ul>
    </motion.section>
  );
};

export default ProjectPage;
