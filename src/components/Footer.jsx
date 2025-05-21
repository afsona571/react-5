import React from 'react';
import art from '../assets/art.png';

const Footer = () => {
  //asdsadsadsadsa
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${art})` }}
    >
        {/* Темная полупрозрачная подложка */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Контент поверх фона */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Lesson</h1>
        <p className="text-lg md:text-xl max-w-xl">
          This is a full-screen hero section with a background image and dark overlay.
        </p>
        
        <div className="flex gap-4 p-8">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
            Playstore
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full font-semibold bg-transparent">
            App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
