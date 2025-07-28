import React from "react";
import "./i18n";
import Header from "./components/Header";
import city from "./assets/cyber.png"; // замени на своё изображение
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#ded0c3] dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <Header />
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 p-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            {t("workForClients")}
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            {t("description")}
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
            {t("getMoreDetails")}
          </button>
        </div>
        <div>
          <img src={city} alt="cyber" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>
    </div>
  );
};

export default App;
