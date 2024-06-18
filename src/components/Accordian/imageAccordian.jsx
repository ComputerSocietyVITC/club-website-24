import React from 'react'
import { useState } from "react";
import "./style.css";
import items from '../../pages/homedata'

const ImageAccordian = ({ itemms, setActiveItem }) => {
    const [active, setActive] = useState(0);

    const handleToggle = (index) =>{setActive(index); setActiveItem(itemms[index]);}
    return (
    <>
        <div className="relative z-2 flex justify-center items-center">
            {items.map((item, index) => {
            const isActive = active === index ? "active" : "";
            return (
                <div className='rounded-[20px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[456px] items-center text-center'>
                <div
                key={item.header}
                className={`image-accordion-item ${isActive}`}
                onMouseEnter={() => handleToggle(index)}
                >
                <h2 className='out_content -rotate-90 self-center'>{item.header}</h2>
                <h2 className="content -rotate-90 xl:rotate-0">{item.header}</h2>
                </div>
                </div>
            );
            })}
        </div>

    </>
    );
}

export default ImageAccordian
