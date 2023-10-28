import React from "react";
import { BiCalendar } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "./educationPage.css";
import { motion } from "framer-motion";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="education"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="education-title">
        {t("my")} <span>{t("journey")}</span> {t("through")}{" "}
        <span>{t("life")}</span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="education-subtitle">{t("educatio")}</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2003 - 2008</p>
                </div>
                <h3>{t("university")}</h3>
                <p>{t("engineer")}</p>
              </div>
            </div>

            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2021 - 2022</p>
                </div>
                <h3>{t("goit")}</h3>
                <p>{t("frontend")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="education-subtitle">{t("experience")}</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2008 - {t("present")}</p>
                </div>
                <h3>{t("mining")}</h3>
                <p>{t("management")}</p>
              </div>
            </div>

            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2022 - {t("present")}</p>
                </div>
                <h3>{t("freelance")}</h3>
                <p>{t("freedom")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationPage;
