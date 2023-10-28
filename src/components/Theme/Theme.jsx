import React from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import "./theme.css";
import { useTheme } from "../../hooks/use-theme";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleLight = () => {
    setTheme("light");
  };

  const handleDark = () => {
    setTheme("dark");
  };

  return (
    <div className="theme-btn-group">
      <button
        className={
          theme === "light"
            ? "theme-btn-activ theme-btn-light"
            : "theme-btn theme-btn-light"
        }
        onClick={handleLight}
      >
        <BsSun size={14} />
      </button>
      <button
        className={
          theme === "dark"
            ? "theme-btn-activ theme-btn-dark"
            : "theme-btn theme-btn-dark"
        }
        onClick={handleDark}
      >
        <BsMoonFill size={14} />
      </button>
    </div>
  );
};

export default Theme;
