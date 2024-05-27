import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane, FaGamepad, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import logo from '../ICON.png'; // Adjust the path to your image

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-8 border-t border-white">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-8 md:mb-0 flex items-center">
                    <img src={logo} alt="IEEE Logo" className="mr-2 mb-8 h-16 w-16" /> {/* Add the image here */}
                    <div>
                        <h2 className="text-lg font-bold font-sans">IEEE COMPUTER SOCIETY</h2>
                        <p className="mt-2 font-raleway">VIT CHENNAI STUDENT BRANCH</p>
                        <p className="mt-4 text-xs font-mono">© Copyright 2023 - IEEE CS VITC. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h4 className="text-lg font-mono custom-underline-gradient">Menu</h4>
                    <ul className="mt-4 space-y-2 font-sans font-xs">
                        <li><a href="/home" >Home</a></li>
                        <li><a href="/team" >The Team</a></li>
                        <li><a href="/events" >Events</a></li>
                        <li><a href="/projects" >Projects</a></li>
                        <li><a href="/blogs" >Blogs</a></li>
                        <li><a href="/contacts" >Contact</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h4 className="text-lg font-mono custom-underline-gradient">Address</h4>
                    <p className="mt-4">Kelambakkam - Vandalur Rd, Rajan Nagar,</p>
                    <p>Chennai, Tamil Nadu 600127</p>
                    <h4 className="text-lg font-semibold mt-4 custom-underline-gradient">Email</h4>
                    <p className="mt-2">ieeecomputersociety@vit.ac.in</p>
                </div>
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h4 className="text-lg font-mono custom-underline-gradient">Social Media</h4>
                    <div className="flex space-x-8 mt-4">
                        <a href="#" className=" hover:text-blue-500"><FaTwitter size={24} className='icon' /></a>
                        <a href="#" className=" hover:text-pink-500"><FaInstagram size={24} className='icon'/></a>
                        <a href="#" className=" hover:text-red-500"><FaYoutube size={24} className='icon'/></a>
                        <a href="#" className=" hover:text-blue-400"><FaTelegramPlane size={24} className='icon'/></a>
                    </div>
                    <div className="flex space-x-8 mt-4">
                        <a href="#" className=" hover:text-gray-500"><FaGamepad size={24} className='icon' /></a>
                        <a href="#" className=" hover:text-blue-700"><FaLinkedin size={24} className='icon'/></a>
                        <a href="#" className=" hover:text-gray-700"><FaGithub size={24} className='icon'/></a>
                        <a href="#" className=" hover:text-black"><FaMedium size={24} className='icon'/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
