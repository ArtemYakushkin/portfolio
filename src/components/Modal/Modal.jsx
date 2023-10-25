import React from "react";
import { createPortal } from "react-dom";
import { MdEmojiEmotions } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./modal.css";
import { useMatchMedia } from "../../hooks/use-match-media";
// import { useParams } from "react-router-dom";
// import { projectsData } from "../../db/projectsData";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ slide, closeModal, open }) => {
  const { isMobile } = useMatchMedia();

  return createPortal(
    <div
      className={open ? "overlay open" : "overlay"}
      onClick={() => closeModal(false)}
    >
      <div
        className={open ? "window open" : "window"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-left">
          {isMobile ? (
            <img className="modal-img" src={slide.imgMobile} alt="" />
          ) : (
            <img className="modal-img" src={slide.img} alt="" />
          )}
          {/* <img className="modal-img" src={slide.img} alt="" /> */}
        </div>
        <div className="modal-right">
          <h3 className="modal-title">{slide.title}</h3>
          <p className="modal-skills">{slide.skills}</p>
          <div className="modal-btn-box">
            <a
              className="modal-btn"
              href={slide.gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
              Git Repo
            </a>
            <a
              className="modal-btn"
              href={slide.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <MdEmojiEmotions />
              Demo
            </a>
            <div className="modal-btn-close" onClick={() => closeModal(false)}>
              <AiOutlineClose size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
