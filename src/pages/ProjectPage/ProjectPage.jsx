import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
// import { Link } from "react-router-dom";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./projectPage.css";
import { projectsData } from "../../db/projectsData";
// import { useMatchMedia } from "../../hooks/use-match-media";
import Slider from "../../components/Slider/Slider";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <motion.section
      className="project"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="project-title">
        My <span>Successes</span> and <span>Failures</span>
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
