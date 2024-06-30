import React, { useState } from "react";
import { footerLinks } from "../data/footerLinks";
import { motion } from "framer-motion";

interface Route {
    href: string;
    title: string;
}

const HeaderComp: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`w-screen text-white z-50 bg-transparent`}>
            {isOpen && (
                <section
                    onClick={handleClick}
                    className="fixed flex flex-col items-center justify-center h-screen w-screen z-40 backdrop-blur-2xl"
                >
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                            ease: "easeInOut",
                        }}
                        exit={{ opacity: 0 }}
                        className="backdrop-blur-xl shadow-slate-600 border border-white/[0.4] shadow-2xl flex flex-col items-center justify-center rounded-2xl py-4 px-8 min-w-screen"
                    >
                        {footerLinks.map((route: Route, index: number) => (
                            <a key={index} href={route.href}>
                                <section
                                    onClick={handleClick}
                                    className={`px-16 py-6 hover:bg-black hover:bg-opacity-10 rounded-md`}
                                    id={route.title}
                                >
                                    {route.title}
                                </section>
                            </a>
                        ))}
                    </motion.section>
                </section>
            )}
            <div className="px-6 py-4 lg:px-8 lg:py-6 flex justify-between items-center relative">
                <a href="/">
                    <img
                        src="/assets/ICON.webp"
                        alt="IEEE Logo"
                        className="h-12 w-12"
                    />
                </a>

                <nav className="xl:hidden">
                    <button
                        onClick={handleClick}
                        className="flex flex-col justify-center items-center py-1"
                    >
                        <span
                            className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                                isOpen
                                    ? "rotate-45 translate-y-1"
                                    : "-translate-y-0.5"
                            }`}
                        ></span>
                        <span
                            className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`bg-slate-400 block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                                isOpen
                                    ? "-rotate-45 -translate-y-1"
                                    : "translate-y-0.5"
                            }`}
                        ></span>
                    </button>
                </nav>
                <nav className="hidden xl:block flex-1">
                    <ul className="flex justify-end text-slate-300 my-1 font-regular font-montserrat text-xl">
                        {footerLinks.map((route: Route, index: number) => (
                            <li key={index}>
                                <a
                                    href={route.href}
                                    className={`custom-underline hover:text-white mx-6`}
                                >
                                    {route.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderComp;

/*

const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  
  {isOpen && (
        <section
          onClick={handleClick}
          className="fixed flex flex-col items-center justify-center h-screen w-screen z-40 backdrop-blur-lg"
        >
          <motion.section
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-xl shadow-slate-600 border border-white/[0.4] shadow-2xl flex flex-col items-center justify-center rounded-2xl py-4 px-8 min-w-screen"
          >
            {routes.map((route) => {
              return (
                <NavLink to={route.href}>
                  <section
                    onClick={handleClick}
                    className={`px-16 py-6 hover:bg-black hover:bg-opacity-10 rounded-md 
									`}
                    id={route.title}
                  >
                    {route.title}
                  </section>
                </NavLink>
              );
            })}
          </motion.section>
        </section>
      )}*/
