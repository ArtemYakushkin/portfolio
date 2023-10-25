import React from "react";
import "./aboutPage.css";
import aboutImg from "../../assets/Model-small.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="about-background">
      <motion.section
        className="about "
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
      >
        <h2 className="about-title">
          About <span>Me</span>
        </h2>

        <div className="about-img">
          <img src={aboutImg} alt="about me" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3 className="about-subtitle">Frontend Developer!</h3>
          <p className="about-text">
            What do we have here? Yes, it's me - Artem Yakushkin, your best
            friend and the one who made this website. Well, it's time to
            discover a bit about the genius thing next to this page. First,
            about me: I'm a great developer (at least in my dreams) with a
            massive ego and a light sense of humor. My life consists of
            late-night coding including sometimes attempts to find that pesky
            bug in the code, hiding like a devil under the table. After endless
            hours working on projects, I spend my time to understand what "life
            beyond code" means. But forget about it, who needs that anyway? I
            have a world of binary code and the sizzling horizons of the command
            line. So, if you are absorbed with those endless lines of code as I
            am and want to share your adventures in the world of technical
            skills, welcome to my dull world. Maybe we can exchange some small
            stories about how computers make our lives interesting. Right?
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
