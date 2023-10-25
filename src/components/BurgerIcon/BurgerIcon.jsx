import React, { useState } from "react";
import "./burgerIcon.css";
import MobileMenu from "../MobileMenu/MobileMenu";

const BurgerIcon = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((open) => !open);

  return (
    <>
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? "burger-line-open" : "burger-line"} />
        <div className={open ? "burger-line-open" : "burger-line"} />
        <div className={open ? "burger-line-open" : "burger-line"} />
      </div>
      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </>
  );
};

export default BurgerIcon;
