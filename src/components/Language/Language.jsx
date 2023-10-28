import React from "react";
import "./language.css";
import { useTranslation } from "react-i18next";

const locales = {
  ua: { title: "UA" },
  en: { title: "EN" },
};

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-btn-group">
      <ul className="language-list">
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              className={
                i18n.resolvedLanguage === locale
                  ? "language-btn-activ"
                  : "language-btn"
              }
              onClick={() => i18n.changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
