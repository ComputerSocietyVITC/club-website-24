import React,{useState} from "react";
import ImageAccordian from '../components/Accordian/imageAccordian'
import Footer from "../components/footer";
import items from './homedata'
const Homepage = () => {
    const [activeItem, setActiveItem] = useState(items[0]);
    return (
        <>
            <div className="min-h-screen bg-slate-950 ">
                <div className="container mx-auto grid grid-cols-1 items-center justify-center min-h-screen ">
                    
                        <h1 className="text-7xl font-bold leading-tight text-center text-emerald-400">
                            We are The<br />
                            IEEE Computer Society<br />
                            VIT Chennai..
                        </h1>
                    
                </div>
                <div className=' flex flex-col justify-center items-center w-[80%] m-auto gap-y-6'>
                    <p className='text-white text-montserrat font-light text-[45px] max-[1px] tracking-[-0.025em] p-8 leading-25'>DISCOVER | DEVELOP | DEPLOY</p>
                    <button className=' border-2 border-solid border-teal-500 p-4 rounded-full bg-gradient-to-r from-b_col1  to-b_col2 ' ><p className='text-teal-500 text-montserrat font-light text-2xl'>Gateway to Tech &#x25BC;</p></button>
                </div>
                <div className='mt-[15%] pb-16 flex justify-center gap-[10%]'>
                    <ImageAccordian itemms={items} setActiveItem={setActiveItem}/>
                    <div className='rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[430px] shadow-2xl shadow-[#7ac4ec]/30'>
                        <div className='rounded-[calc(36px-1px)] p-12 bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] flex flex-col justify-evenly text-center' >
                                <h2 className="text-4xl font-light text-teal-500">{activeItem.header}</h2>
                                <p className='text-xl text-b_col3'>{activeItem.content3}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
