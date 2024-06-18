import React, { useState } from "react";
import ImageAccordian from "../components/Accordian/imageAccordian";
import Footer from "../components/footer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import socialMediaLinks from "../data/socialMediaLinks";
import HAccord from "../components/Accordian/hAccord"

const items = [
  {
    header: "About Us",
    content3:
      "IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create (sometimes Break!), Develop, and Explore. Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge. Come join us on this journey!",
  },

  {
    header: "Our Vision",
    content3:
      "At IEEE Computer Society VITC, our belief is grounded in the principles of mutual learning and growth. We believe in empowering the community to innovate, develop, create, and to empower itself, which for us is, the greatest Return on Investment for a Technical Society. With a transcendent passion for Tech, and a solemn cognizance of people's struggles, we aspire to solve the great problems of today, and prepare together for a brighter tomorrow.",
  },

  {
    header: "Newsletter",
    content3:
      " Want to stay updated with the latest news about IEEE CS VITC? Enter you email address and allow notifications.",
  },
  {
    header: "Contact",
    content3: "",
  },
];

const AnimatedSection = ({ children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 50% of the element is in view
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start from opacity 0 and 10 pixels above
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate to opacity 1 and natural position
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.section>
  );
};

const Homepage = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <div>
        <div className="container mx-auto grid grid-cols-1 items-center justify-center min-h-screen ">
          <h1 className="lg:text-7xl text-4xl font-bold text-center text-[#7DFEF7]">
            We are The
            <br />
            IEEE Computer Society
            <br />
            VIT Chennai...
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <p className="text-white text-montserrat font-light text-5xl p-16 flex">
            <AnimatedSection delay={0.5}>DISCOVER</AnimatedSection>
            <section className="mx-12">|</section>
            <AnimatedSection delay={1.5} className="mx-4">
              DEVELOP
            </AnimatedSection>
            <section className="mx-12">|</section>
            <AnimatedSection delay={2.5} className="mx-4">
              DEPLOY
            </AnimatedSection>
          </p>
          <button
            onClick={handleClick}
            className="border-2 border-[#05FFF0] p-4 rounded-full bg-gradient-to-r from-[#123838]  to-[#0C2B38] "
          >
            <p className="text-[#6BEDFF] text-montserrat font-light text-2xl px-4">
              Gateway to Tech &#x25BC;
            </p>
          </button>
        </div>
        <div
          ref={ref}
          className="min-h-screen scale-[40%] lg:scale-100 flex-col justify-center items-center hidden lg:block"
        >
          {" "}
          {/*mt-[15%] pb-32 */}
          <div className="flex justify-around px-16 w-full">
            <ImageAccordian itemms={items} setActiveItem={setActiveItem} />
            <div className="rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[430px] shadow-2xl shadow-[#7ac4ec]/30">
              <div className="rounded-[calc(36px-1px)]  bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] relative">
                <div className="absolute -right-[100px] -bottom-14 z-15"></div>
                <div className="flex flex-col rounded-[calc(36px-2px)] justify-center text-center z-20 w-full h-full items-center">
                  <h2 className="text-4xl mb-12 font-semibold text-center items-center text-[#7DFEF7]">
                    {activeItem.header}
                  </h2>
                  <p
                    className={`text-md px-12 ${
                      activeItem.header === "Newsletter"
                        ? "text-center"
                        : "text-left"
                    } items-center text-[#7DFEF7]`}
                  >
                    {activeItem.content3}
                    {activeItem.header === "Newsletter" ? (
                      <>
                        <input
                          type="email"
                          className="border-2 border-teal-300/[0.8] bg-gradient-to-r from-[#123838]  to-[#0C2B38] rounded-lg my-8 text-md px-2 py-1 w-full text-center "
                        />
                        <button className="border-2 border-cyan-100/[0.6] bg-gradient-to-r from-[#123838]  to-[#0C2B38] rounded-2xl my-4 text-xl px-4 p-2 text-center text-blue-100/[0.8]">
                          Subscribe
                        </button>{" "}
                        {/*make sure to call a POST method*/}
                      </>
                    ) : (
                      <></>
                    )}

                    {activeItem.header === "Contact" ? (
                      <>
                        <div>
                          <div className="flex flex-col">
                            <div className="text-lg sm:self-center md:self-center lg:text-base text-blue-200 inline-block mb-3 font-bold">
                              Email
                            </div>
                            <a
                              href="mailto:ieeecomputersociety@vit.ac.in"
                              target="_blank"
                              rel="noreferrer"
                              className="my-3 block text-white hover:text-white/[0.8] text-base lg:text-lg lg:text-left hover:scale-125 transition duration-200"
                            >
                              ieeecomputersociety@vit.ac.in
                            </a>
                          </div>
                        </div>
                        <div className="my-4 w-full flex flex-col justify-center lg:order-4">
                          <div className="text-lg lg:text-base lg:text-center text-blue-200 inline-block mb-3 md:self-center sm:self-center font-bold">
                            Social Media
                          </div>
                          <div className="grid grid-cols-4 place-items-center">
                            {socialMediaLinks.map((link, index) => (
                              <div
                                key={index}
                                className="hover:scale-150 transition duration-200"
                              >
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={link.icon}
                                    alt={link.platform}
                                    className="h-7 my-5 "
                                  />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
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
