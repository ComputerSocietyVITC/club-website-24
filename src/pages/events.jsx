import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { eventData } from "../data/eventsdata"; // Adjust the path as needed

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
};

const images = importAll(
  require.context("../data/images/events", true, /main\.(jpg|JPG|png)$/)
);

const Events = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slides, setSlides] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  useEffect(() => {
    const eventSlides = Object.keys(images).map((key) => ({
      src: images[key],
      eventName: key.split("/")[0],
    }));
    setSlides(eventSlides);
    if (eventSlides.length > 0) {
      setCurrentEvent(eventSlides[0].eventName);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigateToGallery = (eventName) => {
    navigate(`/gallery/${eventName || currentEvent}`);
  };

  const handleSlideChange = (swiper) => {
    if (slides.length > 0) {
      setCurrentEvent(slides[swiper.realIndex]?.eventName || "");
    }
  };

  return  (
    <div className="relative min-h-screen bg-transparent flex flex-col pl-4 ml-4 items-center justify-center">
      {isMobile ? (
        <div className="w-full max-w-6xl px-4">
        {slides.map((slide, index) => (
          <div key={index} className="mb-4">
            <div className="text-white text-3xl font-bold mt-16 text-center">{slide.eventName.toUpperCase()}</div>
            <div className="flex justify-center"> {/* Center the image */}
              <img
                src={slide.src}
                alt={slide.eventName}
                className="w-full max-w-72 h-[400px] rounded-xl object-full mt-4"
                onClick={() => handleNavigateToGallery(slide.eventName)}
              />
            </div>
            <div className="rounded-[24px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-auto w-full md:w-auto md:h-auto shadow-2xl shadow-[#7ac4ec]/30 mt-4">
              <div className="rounded-[calc(24px-1px)] p-6 md:p-8 bg-gradient-to-b md:w-full from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-full flex flex-col justify-between text-center text-white max-w-[700px]">
                <h2 className="text-2xl md:text-3xl text-b_col3 font-semibold mb-2">
                  {eventData[slide.eventName]?.title}
                </h2>
                <p className="text-sm md:text-base">
                  {eventData[slide.eventName]?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      ) : (
        <>
          <div className="text-white text-5xl font-bold mb-4 mt-20 text-center">{currentEvent.toUpperCase()}</div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="w-full max-w-5xl"
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
              speed: 2000,
              loop: true,
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.src}
                  alt={slide.eventName}
                  className="w-full mb-48 h-[400px] rounded-xl object-fill"
                />
                {slide.eventName === currentEvent && (
                  <div className="absolute bottom-0 -left-48 -right-48 rounded-[24px] p-0.5 opacity-75 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-[200px] w-full md:w-auto md:h-auto shadow-2xl shadow-[#7ac4ec]/30">
                    <div className="rounded-[calc(24px-1px)] p-6 md:p-8 bg-gradient-to-b md:w-full from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-full flex flex-col justify-between text-center text-white max-w-[800px]">
                      <h2 className="text-2xl md:text-3xl text-b_col3 font-semibold mb-2">
                        {eventData[slide.eventName]?.title}
                      </h2>
                      <p className="text-sm md:text-base">
                        {eventData[slide.eventName]?.description}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </>
      )}
      {!isMobile && (
        <button
          className="absolute bottom-4 right-4 border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2"
          onClick={() => handleNavigateToGallery()}
        >
          <span className="text-teal-500 font-light text-lg">
            View Gallery &gt;
          </span>
        </button>
      )}
    </div>
  );
};

export default Events;
