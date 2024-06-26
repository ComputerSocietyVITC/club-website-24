import github from "../../assets/socialmedia/github.png";
import linkedin from "../../assets/socialmedia/linkedin.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Teamcard = ({ name, desig, imageUrl, linkUrl, gitUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 50% of the element is in view
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }} // Start from opacity 0 and 10 pixels above
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animate to opacity 1 and natural position
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[554px] lg:w-[430px] md:w-[430px] m-4 sm:w-[300px] cursor-pointer hover:shadow-2xl hover:shadow-[#7ac4ec]/30"
      >
        <div className="rounded-[calc(36px-1px)] p-[30px] bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px]">
          <div className="flex flex-col justify-center items-center gap-y-9 h-[100%] img-hover ">
            <img
              className="rounded-[50%] w-[220px] h-[220px] align-center mt-8 mb-4 img1"
              src={imageUrl}
              alt="none"
            />
            <div className=" flex flex-col ">
              <h2 className="text-white text-3xl font-bold text-center">
                {name}
              </h2>
              <h3 className="text-b_col3 text-xl font-thin text-center pt-2">
                {desig}
              </h3>
              <div className="flex justify-center gap-x-6 ">
                <a href={linkUrl}>
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    className="h-10 my-5 mx-auto lg:mx-0"
                  />
                </a>
                <a href={gitUrl}>
                  <img
                    src={github}
                    alt="Github"
                    className="h-10 my-5 mx-auto lg:mx-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Teamcard;
