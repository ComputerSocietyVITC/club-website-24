import React from 'react';
import logo from '../ICON.png'; // Adjust the path to your image
import { Link } from 'react-router-dom';
const Header = ({ type }) => {
  return (
    <header className={`w-full bg-gradient-to-b from-black to-slate-950 text-white p-4 shadow-md ${type ? "fixed top-0 left-0 z-50" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="IEEE Logo" className="absolute h-12 w-12" />
        <nav className="flex-1">
          <ul className="flex justify-center space-x-20 my-2 font-normal text-lg">
            <li>
              <Link
                to="/"
                className="custom-underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/events'
                className="custom-underline"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="custom-underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="custom-underline"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
