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

const ContactsPage = () => {
  const gitLink = "https://github.com/ArtemYakushkin";
  const instLink = "https://www.instagram.com/yakushkin_artem_/";
  const linkLink = "https://www.linkedin.com/in/artem-yakushkin-a86722229/";

  return (
    <motion.section
      className="contacts"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="contacts-title">
        Call <span>Or</span> Write <span>Me!</span>
      </h2>

      <div className="contacts-row">
        <div className="contacts-left">
          <div className="contacts-info">
            <div className="contacts-subtitle-box">
              <div className="contacts-icon-box">
                <BsFillPhoneVibrateFill size={20} />
              </div>
              <p className="contacts-subtitle">Phone number</p>
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
              <p className="contacts-subtitle">Email Address</p>
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
              <p className="contacts-subtitle">Telegram</p>
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
                <input type="text" placeholder="Full Name" required />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input type="email" placeholder="Email Address" required />
                <span className="focus"></span>
              </div>
            </div>
            <div className="input-box">
              <div className="input-field">
                <input type="number" placeholder="Mobile Number" required />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Email Subject" required />
                <span className="focus"></span>
              </div>
            </div>
            <div className="textarea-field">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <span className="focus"></span>
            </div>
            <div className="form-btn-box">
              <button className="form-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactsPage;
