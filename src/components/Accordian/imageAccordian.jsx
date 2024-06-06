import React from 'react'
import { useState } from "react";
import "./style.css";

const items = [
    {
        header: "ABOUT US",
        header2: "ABOUT US",
    },

    {
        header: "OUR VISION",
        header2: "OUR VISION",
    },

    {
        header: "NEWSLETTER",
        header2: "NEWSLETTER",
    },
    {
        header: "CONTACT",
        header2: "CONTACT",
    },
]; 

const ImageAccordian = () => {
    const [active, setActive] = useState(0);

    const handleToggle = (index) => setActive(index);
    return (
    <>
        <div className="image-accordion">
            {items.map((item, index) => {
            const isActive = active === index ? "active" : "";
            return (
                <div className='rounded-[20px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[456px]'>
                <div
                key={item.header}
                className={`image-accordion-item ${isActive}`}
                onClick={() => handleToggle(index)}
                >
                
                <div className="content">
                    <h2>{item.header2}</h2>
                </div>
                </div>
                </div>
            );
            })}
        </div>
    </>
    );
}

export default ImageAccordian
