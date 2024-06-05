import React from "react";
import Footer from "../components/footer";


const Homepage = () => {
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
                    <p className='text-white text-montserrat font-thin text-[40px] max-[1px] tracking-[-0.025em] p-8 leading-25'>DISCOVER | DEVELOP | DEPLOY</p>
                    <button className='border border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1  to-b_col2 ' ><p className='text-teal-500 text-montserrat font-light text-lg'>Gateway to Tech &#x25BC;</p></button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
