import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import EducationPage from "../../pages/EducationPage/EducationPage";
import SkillsPage from "../../pages/SkillsPage/SkillsPage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
