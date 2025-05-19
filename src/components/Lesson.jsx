import React from "react";
import fon from "../assets/fon.png"
const Lesson = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen bg-[url('./assets/fon.png')]"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Lesson</h1>
        <p className="text-lg md:text-xl max-w-xl">
          This is a full-screen hero section with a background image and dark overlay.
        </p>
          <div class="flex gap-4 p-8">
 
  <button class="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
    Playstore
  </button>
  <button class="border border-white text-white px-6 py-2 rounded-full font-semibold bg-transparent">
    App store
  </button>
</div>


      </div>
    </section>
  );
};

export default Lesson;
