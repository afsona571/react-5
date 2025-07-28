import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-[#ded0c3] dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="font-extrabold text-xl">LOGO</h1>
        <nav className="space-x-8 hidden md:flex">
          <a href="#" className="hover:text-orange-500">{t("home")}</a>
          <a href="#" className="hover:text-orange-500">{t("about")}</a>
          <a href="#" className="hover:text-orange-500">{t("portfolio")}</a>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-white dark:bg-zinc-800 text-sm rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbekcha</option>
          </select>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded"
          >
            {darkMode ? t("lightMode") : t("darkMode")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
