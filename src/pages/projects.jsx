import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import image12 from "../data/images/events/ros/DSC_0133.JPG";

const Project = () => {
  const slides = [
    {
      title: "Project Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius lacinia dolor eget dapibus. Fusce interdum risus nunc, nec iaculis sapien tincidunt et. Nullam vel fringilla eros, id mollis ex. Praesent aliquam est sit amet lorem aliquam egestas. Sed consequat, quam a dapibus tempor, purus lorem aliquam leo, sed venenatis.",
      img: image12,
    },
    {
      title: "Project Name 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius lacinia dolor eget dapibus. Fusce interdum risus nunc, nec iaculis sapien tincidunt et. Nullam vel fringilla eros, id mollis ex. Praesent aliquam est sit amet lorem aliquam egestas. Sed consequat, quam a dapibus tempor, purus lorem aliquam leo, sed venenatis.",
      img: image12,
    },
    // Add more slides as needed
  ];

  return (
    <section className="min-h-screen text-white grid grid-cols-1 place-items-center">
      <div className="w-full  px-6 md:px-12">
        <div className="text-4xl md:text-7xl font-bold text-center pb-16">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center place-items-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="max-w-[500px] w-full max-h-[450px] object-cover md:{max-h-[346px] max-w-[559px]} rounded-xl shadow-2xl shadow-[#7ac4ec]/30 sm:{max-h-[346px] max-w-[559px]}"
                />
                <div className="rounded-[36px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-[346px] md:h-auto shadow-2xl shadow-[#7ac4ec]/30">
                  <div className="rounded-[calc(36px-1px)] p-6 md:p-12 bg-gradient-to-b md:w-full from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-full flex flex-col justify-between text-center text-white max-w-[559px]">
                    <h2 className="text-3xl md:text-4xl text-b_col3 font-semibold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;