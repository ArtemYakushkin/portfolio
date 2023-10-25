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
            Hi, I'm <span>Artem Yakushkin</span>
          </h1>
          <div className="home-text-animate">
            <h3 className="home-subtitle">Frontend Developer</h3>
          </div>
          <p className="home-text">
            Welcome to this website! There's nothing here except coding, a few
            projects, and some dull technical details. If you were looking for a
            place to spend your precious time, you've come to the right address!
            Here, you'll find pages, buttons, and even a bit of color. Besides
            that, you'll see my photo, but alas, don't expect model standards –
            it's just a developer's photo. So, if you have some spare time and
            you're looking for a way to spend it, feel free to browse my
            projects and read articles. But be careful, it might be contagious!
          </p>
          <div className="home-btn-box">
            <Link to={"/contacts"} className="home-btn">
              <BiSolidContact size={20} />
              Contact Me
            </Link>
            <button
              className="home-btn"
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            >
              <BiDownload size={20} />
              My Resume
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
