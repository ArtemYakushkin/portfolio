import React, { useState } from "react";
import "./slider.css";
import Modal from "../Modal/Modal";
import { useMatchMedia } from "../../hooks/use-match-media";

const Slider = ({ slide }) => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useMatchMedia();

  return (
    <>
      {isMobile ? (
        <img
          className="slider-img-mobile"
          onClick={() => {
            setOpen(true);
          }}
          src={slide.imgMobile}
          alt=""
        />
      ) : (
        <img
          className="slider-img"
          onClick={() => {
            setOpen(true);
          }}
          src={slide.img}
          alt=""
        />
      )}
      {/* <button
        className="slider-btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        See More
      </button> */}
      {open && <Modal slide={slide} closeModal={setOpen} open={open} />}
    </>
  );
};

export default Slider;
