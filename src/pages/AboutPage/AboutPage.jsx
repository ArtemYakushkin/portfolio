import React from "react";
import { useTranslation } from "react-i18next";
import "./aboutPage.css";
import aboutImg from "../../assets/Model-small.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-background">
      <motion.section
        className="about "
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
      >
        <h2 className="about-title">
          {t("aboutTitle")} <span>{t("aboutTitleSpan")}</span>
        </h2>

        <div className="about-img">
          <img src={aboutImg} alt="about me" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3 className="about-subtitle">Frontend Developer!</h3>
          <p className="about-text">{t("aboutText")}</p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
