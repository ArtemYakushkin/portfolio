import React from "react";
import { useTranslation } from "react-i18next";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import SelectOption from "../SelectOption/SelectOption";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="nav-wrapper">
      <Link to={"/"} className="logo">
        ArtemY.
      </Link>

      <nav className="navbar">
        <NavLink className="nav-link activ" to={"/"}>
          {t("home")}
        </NavLink>
        <NavLink className="nav-link" to={"/about"}>
          {t("about")}
        </NavLink>
        <NavLink className="nav-link" to={"/education"}>
          {t("education")}
        </NavLink>
        <NavLink className="nav-link" to={"/skills"}>
          {t("skills")}
        </NavLink>
        <NavLink className="nav-link" to={"/project"}>
          {t("projects")}
        </NavLink>
        <NavLink className="nav-link" to={"/contacts"}>
          {t("contacts")}
        </NavLink>
      </nav>

      <SelectOption />

      <BurgerIcon />
    </div>
  );
};

export default NavBar;
