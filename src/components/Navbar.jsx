import React from 'react';
import logo from "../assets/left.png"; // Убедись, что путь правильный

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-[10px] px-[30px]">
      <div>
        <img className="w-[200px] h-[60px]" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Product</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Faq</a></li>
          <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
