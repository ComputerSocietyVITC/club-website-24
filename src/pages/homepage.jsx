import React,{useState} from "react";
import ImageAccordian from '../components/Accordian/imageAccordian'
import Footer from "../components/footer";
import AnimeGif from '../data/AnimeGif'

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
    return (
        <>
            <div className="min-h-screen gradient">
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
                <div className='h-[900px] pt-[12%]'>   {/*mt-[15%] pb-32 */}
                    <div className='flex justify-center gap-[10%]'>
                        <ImageAccordian itemms={items} setActiveItem={setActiveItem}/>
                        <div className='rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[430px] shadow-2xl shadow-[#7ac4ec]/30'>
                            <div className='rounded-[calc(36px-1px)]  bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] relative' >
                                <div className='absolute -right-[100px] -bottom-14 z-15'>
                            <AnimeGif  src='https://s3-alpha-sig.figma.com/img/bcc3/97cf/bf818f6c77769aec7e4706340f467fe1?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BX6ZV8Fw0c8aQ7E--NMP-HYMGaGwHjWAAsW6CN5v~WXiE5E0Rh8GY60UbrUuA-xs4PL58el1s-HC8h4FdP5xPRExWq-8y60I~R1Qq2dsA8OYVrBa4HQqVR6aQLmzyfDhV8TAt1ZgtaIBnJt3ftyaCny6ceMqzS-3LOtw-jN5ZKKsZkZ~gJPjxX35AjGmumFIGewTT4bA0EJHvFRfeJXyfmp1hljKEDixM3E1QP3TO2x9RxzEAL93MZS~Vp~a4ESkByPGlbveP169AIqsdi6rP8nPyjd9edspGE4JNg9eUVm37xhLqXkz9XJOzVrz-HygG4OhBP9kC1GXU~JRv6eZlw__' alt='anime Gif' />
                                </div>
                                <div className='flex flex-col rounded-[calc(36px-1px)] justify-evenly text-center backdrop-blur-sm z-20 w-[100%] h-[100%]'>
                                    <h2 className="text-4xl font-light text-center items-center text-teal-500">{activeItem.header}</h2>
                                    <p className='text-xl text-center items-center text-b_col3'>{activeItem.content3}</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
