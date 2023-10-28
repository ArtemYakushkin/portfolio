import React from "react";
import { Link } from "react-router-dom";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { BiSolidContact, BiDownload } from "react-icons/bi";
import "./homePage.css";
import mainImg from "../../assets/Model bw.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PDF_FILE_URL =
  "http://localhost:3000/ArtemYakushkin-FrontEndDeveloper.pdf";

const HomePage = () => {
  const gitLink = "https://github.com/ArtemYakushkin";
  const instLink = "https://www.instagram.com/yakushkin_artem_/";
  const linkLink = "https://www.linkedin.com/in/artem-yakushkin-a86722229/";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute = ("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const { t } = useTranslation();

  return (
    <motion.section
      className="home"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <div className="home-left">
        <div className="home-content">
          <h1 className="home-title">
            {t("hello")} <span>{t("name")}</span>
          </h1>
          <div className="home-text-animate">
            <h3 className="home-subtitle">Frontend Developer</h3>
          </div>
          <p className="home-text">{t("mainText")}</p>
          <div className="home-btn-box">
            <Link to={"/contacts"} className="home-btn">
              <BiSolidContact size={20} />
              {t("contactBtn")}
            </Link>
            <button
              className="home-btn"
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            >
              <BiDownload size={20} />
              {t("resumeBtn")}
            </button>
          </div>
        </div>
        <div className="home-sci">
          <a
            className="home-sci-link"
            href={gitLink}
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialGithub size={20} />
          </a>
          <a
            className="home-sci-link"
            href={instLink}
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialInstagram size={20} />
          </a>
          <a
            className="home-sci-link"
            href={linkLink}
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialLinkedin size={20} />
          </a>
        </div>
      </div>
      <div className="home-right">
        <img
          className="home-main-img"
          src={mainImg}
          alt="main_photo"
          width={400}
        />
      </div>
    </motion.section>
  );
};

export default HomePage;
