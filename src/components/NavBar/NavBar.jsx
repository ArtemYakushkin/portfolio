import React, { useState } from "react";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import SelectOption from "../SelectOption/SelectOption";

const NavBar = () => {
  // const [selected, setSelected] = useState("");

  return (
    <div className="nav-wrapper">
      <Link to={"/"} className="logo">
        ArtemY.
      </Link>

      <SelectOption />

      <BurgerIcon />

      <nav className="navbar">
        <NavLink className="nav-link activ" to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={"/about"}>
          About
        </NavLink>
        <NavLink className="nav-link" to={"/education"}>
          Education
        </NavLink>
        <NavLink className="nav-link" to={"/skills"}>
          Skills
        </NavLink>
        <NavLink className="nav-link" to={"/project"}>
          Projects
        </NavLink>
        <NavLink className="nav-link" to={"/contacts"}>
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
