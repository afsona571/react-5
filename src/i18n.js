import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About us",
      portfolio: "Portfolio",
      workForClients: "Work that we produce for our clients",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.",
      getMoreDetails: "Get more details",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      portfolio: "Портфолио",
      workForClients: "Работа, которую мы выполняем для наших клиентов",
      description:
        "Lorem Ipsum — это просто текст-«рыба» в печати и наборе типов. Lorem Ipsum является стандартом.",
      getMoreDetails: "Получить больше информации",
      darkMode: "Темная тема",
      lightMode: "Светлая тема",
    },
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      portfolio: "Portfolio",
      workForClients: "Mijozlarimiz uchun yaratilgan ishlar",
      description:
        "Lorem Ipsum - bu chop etish va shriftlashtirish sanoatidagi standart matn.",
      getMoreDetails: "Ko‘proq ma’lumot olish",
      darkMode: "Qorong‘i rejim",
      lightMode: "Yorug‘ rejim",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
