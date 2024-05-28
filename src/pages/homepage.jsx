import React from "react";
import image1 from '../1-min.jpeg'; // Adjust the path
import image2 from '../2-min.jpeg'; // Adjust the path
import image4 from '../3-min.jpeg'; // Adjust the path

const Homepage = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-950 text-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen px-12">
                    <div className="ml-24 md:col-span-1 flex justify-center md:justify-center mb-8 md:mb-0">
                        <h1 className="text-7xl font-bold leading-tight text-left">
                            We are The<br />
                            IEEE Computer<br />
                            Society<br />
                            VIT Chennai..
                        </h1>
                    </div>
                    <div className="md:col-span-1 flex justify-center items-center mr-24">
                        <div className="relative w-full max-w-lg flex justify-center items-center">
                            <img src={image4} alt="Main Event" className="w-80 h-80 rounded-full object-cover" />
                            <div className="absolute border-4 border-green-400 rounded-full" style={{ width: 'calc(16rem + 200px)', height: 'calc(16rem + 200px)' }}></div>
                            <div className="absolute border-2 border-gray-500 rounded-full" style={{ width: 'calc(18rem + 240px)', height: 'calc(18rem + 240px)' }}></div>
                            <div className="absolute border-2 border-gray-700 rounded-full" style={{ width: 'calc(20rem + 280px)', height: 'calc(20rem + 280px)' }}></div>
                            <div className="absolute w-20 h-20 rounded-full flex items-center justify-center" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }}>
                                <img src={image1} alt="Event 1" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div className="absolute w-20 h-20 rounded-full flex items-center justify-center" style={{ top: '50%', right: '-55px', transform: 'translateY(-50%)' }}>
                                <img src={image2} alt="Event 2" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div className="absolute w-20 h-20 rounded-full flex items-center justify-center" style={{ top: '50%', left: '-55px', transform: 'translateY(-50%)' }}>
                                <img src={image4} alt="Event 4" className="w-full h-full rounded-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
git 