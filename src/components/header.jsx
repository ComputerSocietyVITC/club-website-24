import React, { useState, useRef } from 'react';
import { useClickAway } from "react-use";
import logo from '../ICON.png';
import { NavLink } from 'react-router-dom';
import { routes } from '../data/routes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  useClickAway(ref, () => setIsOpen(false));

  return (
    <header className={`w-full text-white fixed z-10 ${!isOpen ? "border-b-2 border-b-slate-600" : ""}`}>
      <div className="px-6 py-4 xl:px-8 xl:py-6 flex justify-between items-center relative">
        <img src={logo} alt="IEEE Logo" className="h-12 w-12" />
        <nav className="flex-1 flex justify-end xl:hidden">
          <button onClick={handleClick} className="flex flex-col justify-center items-center">
            <span className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${isOpen ? 
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                            }`} >
            </span>
            <span className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                            'opacity-0' : 'opacity-100'
                            }`} >
            </span>
            <span className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${isOpen ? 
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                            }`} >
            </span>
          </button>
          {isOpen && (
            <div className="absolute left-0 right-0 top-[3.5rem] p-5 mt-2 bg-gradient-to-t from-[#040414] to-[#0E1C31] border-b-2 border-b-slate-600">
          <ul className="grid gap-3">
            {routes.map((route) => {
              return (
                <li key={route.title}>
                  <NavLink
                    className="m-2 text-l font-medium custom-underline hover:text-white link-activee"
                    to={route.href}
                    onClick={handleClick}
                  >
                    {route.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          </div>
          )}
        </nav>
        <nav className="hidden xl:block flex-1">
          <ul className="flex justify-end space-x-16 text-slate-400 my-1 font-bold font-montserrat text-xl ">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.href}
                  className="custom-underline hover:text-white"
                  activeClassName="link-activee"
                >
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
