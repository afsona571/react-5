import React from 'react';
import logo from "../assets/telefon.png";

const Section1 = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h1 className="text-center text-2xl font-semibold mb-12">How the app works</h1>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
      
        <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
          <img className="w-[300px] h-auto" src={logo} alt="App screen" />
        </div>

     
        <div className="md:w-1/2 px-4">
          <h3 className="text-sm text-orange-600 font-semibold uppercase mb-2">Checkout</h3>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            When you done check out <br /> and get it delivered.
          </h2>
          <p className="text-gray-600">
            When you done check out and get it delivered with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;