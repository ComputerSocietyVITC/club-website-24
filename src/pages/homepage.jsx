import React,{useState} from "react";
import ImageAccordian from '../components/Accordian/imageAccordian'
import Footer from "../components/footer";
import {useRef} from 'react';
import HAccord from "../components/Accordian/hAccord"
const items = [
    {
        header: "ABOUT US",
        content3: "this is about us.",
    },

    {
        header: "OUR VISION",
        content3: "this is our vision.",
    },

    {
        header: "NEWSLETTER",
        content3: "this is Newsssss.",
    },
    {
        header: "CONTACT",
        content3: "contact details in the footer.",
    },
];


const Homepage = () => {

    const [activeItem, setActiveItem] = useState(items[0]);
    const ref = useRef(null);
    const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return (
        <>
            <div>
                <div className="container mx-auto grid grid-cols-1 items-center justify-center min-h-screen ">
                    
                        <h1 className="lg:text-7xl text-4xl font-bold text-center text-[#7DFEF7]">
                            We are The<br />
                            IEEE Computer Society<br />
                            VIT Chennai...
                        </h1>
                    
                </div>  
                <div className='min-h-screen flex flex-col justify-center items-center w-[80%] m-auto gap-y-6'>
                    <p className='text-white text-montserrat font-light text-5xl p-16' >DISCOVER | DEVELOP | DEPLOY</p>
                    <button onClick={handleClick} className='border-2 border-[#05FFF0] p-4 rounded-full bg-gradient-to-r from-[#123838]  to-[#0C2B38] ' ><p className='text-[#6BEDFF]/[0.8] text-montserrat font-light text-2xl px-4'>Gateway to Tech &#x25BC;</p></button>
                </div>
                <div ref={ref} className='hidden min-h-screen lg:block lg:scale-75 xl:scale-100 flex-col justify-center items-center'>
                    <div className='flex justify-center gap-[10%]'>
                        <ImageAccordian itemms={items} setActiveItem={setActiveItem}/>
                        <div className='rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[430px]  shadow-2xl shadow-[#7ac4ec]/30'>
                            <div className='rounded-[calc(36px-1px)]  bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] relative' >
                                <div className='absolute -right-[100px] -bottom-14 z-15'>
                            </div>
                                <div className='flex flex-col rounded-[calc(36px-1px)] justify-evenly text-center backdrop-blur-sm z-20 w-[100%] h-[100%]'>
                                    <h2 className="text-4xl font-light text-center items-center text-teal-500">{activeItem.header}</h2>
                                    <p className='text-xl text-center items-center text-b_col3'>{activeItem.content3}</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div className='mt-0 pb-16 mx-32 opacity-100 lg:hidden lg:absolute'>
                <HAccord/>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;