// components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Finance App</h1>
      <button className="relative">
        <span className="absolute right-0 top-0 bg-red-500 text-xs rounded-full px-1">4</span>
        <i className="fas fa-bell"></i>
      </button>
    </header>
  );
}

export default Navbar;
