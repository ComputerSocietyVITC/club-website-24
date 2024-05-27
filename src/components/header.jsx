import React from 'react';
import logo from '../ICON.png'; // Adjust the path to your image

const Header = () => {
  return (
    <header className="bg-slate-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="IEEE Logo" className="h-8 w-8" /> {/* Logo aligned to the left */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-10 ml-32 font-bold text-lg">
            <li>
              <a
                href="/"
                className="custom-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="custom-underline"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="custom-underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="custom-underline"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-24 h-8 bg-green-400 rounded-md"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
