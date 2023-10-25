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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={2}
        grabCursor={true}
        centeredSlides={true}
        navigation
        style={{ width: "100%" }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {projectsData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Slider slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default ProjectPage;
