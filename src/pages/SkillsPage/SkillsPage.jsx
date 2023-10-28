import React from "react";
import "./skillsPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SkillsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-background">
      <motion.section
        className="skills"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
      >
        <h2 className="skills-title">
          {t("just")} <span>{t("god")}</span> {t("of")}{" "}
          <span>{t("knoweledge")}</span> {t("and")} <span>{t("skill")}</span>
        </h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="skills-subtitle">Frontend {t("skil")}</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="skills-progress">
                  <h3>
                    HTML/CSS <span>90%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
                <div className="skills-progress">
                  <h3>
                    JavaScript <span>65%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
                <div className="skills-progress">
                  <h3>
                    React JS <span>50%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
                <div className="skills-progress">
                  <h3>
                    REST API <span>55%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-subtitle">Backend {t("skil")}</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="skills-progress">
                  <h3>
                    Node.js <span>30%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
                <div className="skills-progress">
                  <h3>
                    Express <span>30%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
                <div className="skills-progress">
                  <h3>
                    MongoDB <span>25%</span>
                  </h3>
                  <div className="skills-bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SkillsPage;
