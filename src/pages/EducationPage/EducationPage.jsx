import React from "react";
import { BiCalendar } from "react-icons/bi";
import "./educationPage.css";
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <motion.section
      className="education"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <h2 className="education-title">
        My <span>Journey</span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="education-subtitle">Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2003 - 2008</p>
                </div>
                <h3>
                  Development of Mineral Deposits - Donetsk National Technical
                  University
                </h3>
                <p>
                  Mining engineering, technical development, environmental
                  protection, production management, economic analysis, health
                  and safety at work
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2021 - 2022</p>
                </div>
                <h3>Full stack developer - IT School GoIT</h3>
                <p>
                  Front-end development, back-end development, databases, server
                  and hosting, version control, optimization and performance,
                  development and testing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="education-subtitle">Experience</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2008 - present</p>
                </div>
                <h3>Mining engineer - Donbass excavation company</h3>
                <p>
                  Mining management, personnel management from 30 to 70 people,
                  operational planning, monitoring compliance with labor
                  protection rules, manufacturing documents management, planning
                  and reporting
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="education-content-i">
                <div className="education-year">
                  <BiCalendar size={20} />
                  <p>2022 - present</p>
                </div>
                <h3>Freelance Software Developer - Self-employed</h3>
                <p>
                  Freedom to choose projects, diverse projects, multitasking,
                  adaptation to rapidly evolving technologies, responsibility
                  for meeting project deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationPage;
