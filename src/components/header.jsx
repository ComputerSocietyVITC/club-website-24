import React from 'react';
import logo from '../ICON.png'; // Adjust the path to your image
import { NavLink } from 'react-router-dom';
const Header = ({ type }) => {
  return (
<<<<<<< HEAD
    <header className={`w-full bg-gradient-to-b from-black to-slate-950 text-white p-4 shadow-md `}>
      <div className="px-10 py-4 px-7 flex justify-between items-center relative">
=======
    <header className={`w-full bg-gradient-to-b from-black to-slate-950 text-white p-4 shadow-md ${type ? "fixed top-0 left-0 z-50" : ""}`}>
      <div className="py-4 px-7 flex justify-between items-center relative">
>>>>>>> eefaffcb28f50e995fea914e8fc3b915fb4b81be
        <img src={logo} alt="IEEE Logo" className=" absolute h-12 w-12" />
        <nav className="flex-1">
          <ul className="flex justify-end space-x-16 text-slate-500 my-2 font-bold font-montserrat text-xl ">
            <li>
              <NavLink
                to="/"
                className="custom-underline hover:text-white  "
                activeClassName="link-activee"

              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/team'
                className="custom-underline hover:text-white "
                activeClassName="link-activee"

              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/events'
                className="custom-underline hover:text-white"
                activeClassName="link-activee"

              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="custom-underline hover:text-white "
                activeClassName="link-activee"

              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact
                to="/gallery"
                className="custom-underline hover:text-white"
                activeClassName="link-activee"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="custom-underline hover:text-white"
                activeClassName="link-activee"

              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

