import React, { useState } from "react";
import ImageAccordian from "../components/Accordian/imageAccordian";
import Footer from "../components/footer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HAccord from "../components/Accordian/hAccord";
import { routes } from "../data/routes";
import HomepageRouterCircles from "../components/homepageroutercircles";
import items from "../data/homedata";

const AnimatedSection = ({ children, delay, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 50% of the element is in view
  });

  return (
    <motion.section
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 40 }} // Start from opacity 0 and 10 pixels above
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate to opacity 1 and natural position
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.section>
  );
};

const Homepage = () => {
  const [activeItem, setActiveItem] = useState(items && items.length > 0 ? items[0] : null);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="container mx-auto grid grid-cols-1 items-center justify-center min-h-screen ">
          <h1 className="lg:text-7xl text-4xl font-bold text-center text-[#7DFEF7]">
            <AnimatedSection delay={0.5} className="my-4">
              We are the
            </AnimatedSection>
            <AnimatedSection delay={1} className="my-4">
              IEEE Computer Society
            </AnimatedSection>
            <AnimatedSection delay={1.5} className="my-4">
              VIT Chennai
            </AnimatedSection>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <p className="text-white text-montserrat font-light text-4xl p-16 grid lg:grid-cols-5 grid-rows-3 text-left lg:text-center lg:place-items-center px-6">
            <section className="flex my-2">
              <section className="lg:hidden mx-1">|</section>
              <AnimatedSection delay={0.5} className="lg:mx-4">
                DISCOVER
              </AnimatedSection>
            </section>
            <section className=" hidden lg:block">|</section>
            <section className="flex my-2">
              <section className="lg:hidden mx-1">|</section>
              <AnimatedSection delay={1} className="lg:mx-4">
                DEVELOP
              </AnimatedSection>
            </section>
            <section className=" hidden lg:block">|</section>
            <section className="flex my-2">
              <section className="lg:hidden mx-1">|</section>
              <AnimatedSection delay={1.5} className="lg:mx-4">
                DEPLOY
              </AnimatedSection>
            </section>
          </p>
          <button
            onClick={handleClick}
            className="border-2 border-[#00cabc] p-4 rounded-full bg-gradient-to-r from-[#123838] to-[#0C2B38] hidden lg:block"
          >
            <p className="text-[#49c1d1] text-montserrat font-light text-2xl px-4">
              Gateway to Tech &#x25BC;
            </p>
          </button>
        </div>
        <div
          ref={ref}
          className="min-h-screen scale-[40%] lg:scale-100 flex-col justify-center items-center hidden lg:flex"
        >
          <div className="flex justify-around px-24 w-full">
            <ImageAccordian items={items} setActiveItem={setActiveItem} />
            <div className="rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[555px] w-[430px] shadow-2xl shadow-[#7ac4ec]/30">
              <div className="rounded-[calc(36px-1px)]  bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[549px] relative">
                <div className="absolute -right-[100px] -bottom-14 z-15"></div>
                  <div className="flex flex-col rounded-[calc(36px-2px)] justify-center text-center z-20 w-full h-full items-center">
                    <h2 className="text-4xl mb-12 font-semibold text-center items-center text-[#7DFEF7]">
                      {activeItem.header}
                    </h2>
                    <p
                      className="text-md px-12 items-center text-[#7DFEF7]"
                    >
                      {activeItem.content}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-0 pb-16 mx-32 opacity-100 lg:hidden flex items-center justify-center min-h-screen">
          <HAccord items={items} />
        </div>
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center mb-16">
          {routes.map((data, idx) =>
            idx === 0 ? null : <HomepageRouterCircles route={data} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
