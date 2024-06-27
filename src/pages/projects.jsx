import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import slides from "../data/projectdata";

const Project = () => {
  return (
    <section className="min-h-screen text-white grid grid-cols-1 place-items-center">
      <div className="w-full px-6 md:px-12">
        <div className="text-5xl md:text-7xl font-bold text-center mt-32 mb-8">
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
              <div className="grid grid-cols-1 xl:grid-cols-2 mx-20 gap-4 items-center place-items-center py-8">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="max-w-[550px] w-full max-h-[450px] object-cover md:{max-h-[346px] w-full max-w-[559px]} rounded-xl shadow-2xl shadow-[#7ac4ec]/30 sm:{max-h-[346px] max-w-[59px]}"
                />
                <div className="rounded-[36px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-auto lg:w-[500px] md:w-[400px] shadow-2xl shadow-[#7ac4ec]/30">
                  <div className="rounded-[calc(36px-1px)] p-6 md:p-12 md:h-auto bg-gradient-to-b md:w-full from-[#061b24] via-[#072031] to-[#000b11] flex flex-col text-center text-white max-w-[559px]">
                    <h2 className="text-[3vh] md:text-[4vh] lg:text-[5vh] xl:text-[6vh] text-b_col3 font-semibold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-[1.5vh] md:text-[1.6vh] lg:text-[1.75vh] xl:text-[2vh]">
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