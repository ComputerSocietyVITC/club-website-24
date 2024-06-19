import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";
import image12 from "../data/images/events/ros/DSC_0133.JPG";
const Project = () => {
  const slides = [
    {
      title: "Project Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius lacinia dolor eget dapibus. Fusce interdum risus nunc, nec iaculis sapien tincidunt et. Nullam vel fringilla eros, id mollis ex. Praesent aliquam est sit amet lorem aliquam egestas. Sed consequat, quam a dapibus tempor, purus lorem aliquam leo, sed venenatis.",
      img: image12, // Adjusted path assuming images are in public/images/
    },
    {
      title: "Project Name 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius lacinia dolor eget dapibus. Fusce interdum risus nunc, nec iaculis sapien tincidunt et. Nullam vel fringilla eros, id mollis ex. Praesent aliquam est sit amet lorem aliquam egestas. Sed consequat, quam a dapibus tempor, purus lorem aliquam leo, sed venenatis.",
      img: image12, // Adjusted path assuming images are in public/images/
    },
    // Add more slides as needed
  ];

  return (
    <>
      <section className="min-h-screen text-white grid grid-cols-1  place-items-center">
        <>
          <div section="">
            <div className="w-screen px-12">
              <div className="text-white text-7xl font-bold text-center pb-16">
                Projects
              </div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center place-items-center">
                      <img
                        src={image12}
                        alt={slide.title}
                        className=" max-h-[500px]"
                      />
                      <div className="rounded-[36px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 h-[346px] w-[559px] shadow-2xl shadow-[#7ac4ec]/30">
                        <div className="rounded-[calc(36px-1px)] p-12 bg-gradient-to-b from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-[342px] flex flex-col justify-evenly text-center text-white">
                          <h2 className="text-4xl text-b_col3 font-semibold mb-4">
                            {slide.title}
                          </h2>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default Project;
