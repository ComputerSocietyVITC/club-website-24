import React,{useState} from 'react'
import "./style_h.css"
const items = [
    {
        header: "ABOUT US",
        header2: "ABOUT US",
        content: "this is about us.",
    },

    {
        header: "OUR VISION",
        header2: "OUR VISION",
        content: "this is our vision.",
    },

    {
        header: "NEWSLETTER",
        header2: "NEWSLETTER",
        content: "this is Newsssss.",
    },
    {
        header: "CONTACT",
        header2: "CONTACT",
        content: "contact details in the footer.",
    },
];

function HAccord() {
    const [accord,setActiveAccord]=useState(-1);
    
    const toggleAccordion=(index) =>{
        setActiveAccord(index);
    }
    return (
        <>
        <div className='text-white h_accord_main flex flex-col items-center'>
            {items.map((item,index) => {
                return (
                    <div key={index} onClick={()=> toggleAccordion(index)} >
                        <div className='flex justify-between p-6'>
                        <div className="h_accord_heading">
                            <h3 className={accord === index ? "active":""}>{item.header2}</h3>
                        </div>
                        <div>
                            { accord === index ? (<><span className='verticle'>-</span></>) : (<><span className='verticle'>+</span></>)}
                            
                        </div>
                        </div>
                        <div>
                            <p className={accord === index ? 'active' : "inactive"}>{item.content}</p>
                        </div>
                    </div>
                );
            })

            }
        </div>
        </>
    )

}
export default HAccord