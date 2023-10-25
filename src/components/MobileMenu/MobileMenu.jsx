import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdMan2, MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import "./mobileMenu.css";

const MobileMenu = ({ open, toggleMenu }) => {
  return (
    <div className={open ? "menu-open" : "menu"}>
      <nav className="menu-nav">
        <NavLink className="menu-nav-link activ" to={"/"} onClick={toggleMenu}>
          <AiOutlineHome size={20} />
          Home
        </NavLink>
        <NavLink className="menu-nav-link" to={"/about"} onClick={toggleMenu}>
          <MdMan2 size={20} />
          About
        </NavLink>
        <NavLink
          className="menu-nav-link"
          to={"/education"}
          onClick={toggleMenu}
        >
          <MdCastForEducation size={20} />
          Education
        </NavLink>
        <NavLink className="menu-nav-link" to={"/skills"} onClick={toggleMenu}>
          <GiSkills size={20} />
          Skills
        </NavLink>
        <NavLink className="menu-nav-link" to={"/project"} onClick={toggleMenu}>
          <AiOutlineFundProjectionScreen size={20} />
          Projects
        </NavLink>
        <NavLink
          className="menu-nav-link"
          to={"/contacts"}
          onClick={toggleMenu}
        >
          <BiSolidContact size={20} />
          Contacts
        </NavLink>
      </nav>
      <Link to={"/"} className="logo" onClick={toggleMenu}>
        ArtemY.
      </Link>
    </div>
  );
};

export default MobileMenu;
