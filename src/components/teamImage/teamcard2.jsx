import github from "../../assets/socialmedia/github.png";
import linkedin from "../../assets/socialmedia/linkedin.png";
const Teamcard2 = ({ name, desig, imageUrl, linkUrl, gitUrl}) => {
    return (
        <>
            <div className='rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[300px] m-4 col-span-1 cursor-pointer  hover:shadow-2xl hover:shadow-[#7ac4ec]/30'>
                <div className='rounded-[calc(36px-1px)] p-[30px] bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] ' >
                    <div className="flex flex-col justify-center items-center gap-y-9 h-[100%] img-hover card">
                    <img className="rounded-[50%] w-[220px] h-[220px] align-center mt-8 mb-4 img1" src={imageUrl} alt='none' />
                    <div className=' flex flex-col '>
                        <h2 className='text-white text-4xl font-bold text-center'>{name}</h2>
                        <h3 className='text-b_col3 text-2xl font-thin text-center'>{desig}</h3>
                        <div className='flex justify-center gap-x-6 '>
                            <a href={linkUrl}><img src={linkedin} alt="Linkedin" className="h-10 my-5 mx-auto lg:mx-0" /></a>
                            <a href={gitUrl}><img src={github} alt="Github" className="h-10 my-5 mx-auto lg:mx-0"/></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teamcard2;
