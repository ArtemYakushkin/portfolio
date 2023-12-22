import React from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BiMailSend, BiLogoTelegram } from "react-icons/bi";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import "./contactsPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const gitLink = "https://github.com/ArtemYakushkin";
  const instLink = "https://www.instagram.com/yakushkin_artem_/";
  const linkLink = "https://www.linkedin.com/in/artem-yakushkin-a86722229/";
  const { t } = useTranslation();

  return (
    <motion.section
      className="contacts"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="contacts-title">
        {t("call")} <span>{t("or")}</span> {t("write")} <span>{t("me")}!</span>
      </h2>

      <div className="contacts-row">
        <div className="contacts-left">
          <div className="contacts-info">
            <div className="contacts-subtitle-box">
              <div className="contacts-icon-box">
                <BsFillPhoneVibrateFill size={20} />
              </div>
              <p className="contacts-subtitle">{t("number")}</p>
            </div>
            <a href="tel:+380507025708" className="contacts-link">
              +38 050 702 5 708
            </a>
          </div>
          <div className="contacts-info">
            <div className="contacts-subtitle-box">
              <div className="contacts-icon-box">
                <BiMailSend size={20} />
              </div>
              <p className="contacts-subtitle">{t("email")}</p>
            </div>
            <a
              href="mailto:artem.frontdeveloper@gmail.com"
              className="contacts-link"
            >
              artem.frontdeveloper@gmail.com
            </a>
          </div>
          <div className="contacts-info">
            <div className="contacts-subtitle-box">
              <div className="contacts-icon-box">
                <BiLogoTelegram size={20} />
              </div>
              <p className="contacts-subtitle">{t("telegram")}</p>
            </div>
            <a
              href="tg://resolve?domain=@ArtemYakushkin"
              className="contacts-link"
            >
              @ArtemYakushkin
            </a>
          </div>
          <div className="contacts-sci">
            <a
              className="contacts-sci-link"
              href={gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <SlSocialGithub size={20} />
            </a>
            <a
              className="contacts-sci-link"
              href={instLink}
              target="_blank"
              rel="noreferrer"
            >
              <SlSocialInstagram size={20} />
            </a>
            <a
              className="contacts-sci-link"
              href={linkLink}
              target="_blank"
              rel="noreferrer"
            >
              <SlSocialLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="contacts-right">
          <form className="form">
            <div className="input-box">
              <div className="input-field">
                <input type="text" placeholder={t("full")} required />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input type="email" placeholder={t("address")} required />
                <span className="focus"></span>
              </div>
            </div>
            <div className="input-box">
              <div className="input-field">
                <input type="number" placeholder={t("mobile")} required />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder={t("subject")} required />
                <span className="focus"></span>
              </div>
            </div>
            <div className="textarea-field">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder={t("message")}
                required
              ></textarea>
              <span className="focus"></span>
            </div>
            <div className="form-btn-box">
              <button className="form-btn" type="submit">
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactsPage;
